import { PrismaClient } from '@prisma/client';
import chalk from 'chalk';
import consola, { LogLevel } from 'consola';
import {
  ActivityType,
  Client,
  Collection,
  IntentsBitField,
  PresenceUpdateStatus,
  REST,
  Routes
} from 'discord.js';
import Command from './classes/Command';
import Commands from './commands';
import { GuildEvents } from './events';

export default class Bot extends Client {
  private readonly commands = new Collection<string, Command>();
  public readonly logger = consola.create({ level: LogLevel.Debug });
  public readonly prisma = new PrismaClient();

  public constructor() {
    super({
      presence: {
        status: PresenceUpdateStatus.Online,
        afk: false,
        activities: [
          { type: ActivityType.Watching, name: 'for chumps & champs' }
        ]
      },
      intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages
      ]
    });

    super
      .login(process.env.DISCORD_TOKEN as string)
      .catch(this.logger.error)
      .then(() => this.register());
  }

  public findCommand(commandName: string) {
    const command = this.commands.get(commandName);

    if (command) return Promise.resolve(command);
    else return Promise.reject('Command does not exist.');
  }

  private register() {
    this.registerCronEvents();
    this.registerGuildEvents();
    this.registerCommandsLocally();
    this.registerCommandsExternally();
  }

  private registerCronEvents() {
    //
  }

  private registerGuildEvents() {
    GuildEvents.forEach((guildEvent) => {
      this.logger.info(`Registering ${chalk.cyan(guildEvent.name)} event...`);
      this.on(guildEvent.name, guildEvent.callback.bind(null, this));
    });
  }

  private registerCommandsLocally() {
    Commands.forEach((command) => {
      this.logger.info(
        `Registering ${chalk.cyan(command.getName())} command...`
      );
      this.commands.set(command.getName(), command);
    });
  }

  private registerCommandsExternally() {
    new REST({ version: '10' })
      .setToken(process.env.DISCORD_TOKEN as string)
      .put(
        Routes.applicationGuildCommands(
          process.env.DISCORD_CLIENT_ID as string,
          process.env.DEVELOPMENT_SERVER_ID as string
        ),
        {
          body: Commands.map((command) => command.getJSON())
        }
      )
      .then(() => this.logger.success('Registered commands externally.'))
      .catch(this.logger.error);
  }
}
