import chalk from 'chalk';
import consola from 'consola';
import {
  ActivityType,
  Client,
  IntentsBitField,
  PresenceUpdateStatus,
  REST,
  Routes
} from 'discord.js';
import Commands from './commands';
import { GuildEvents } from './events';

export default class Bot extends Client {
  private readonly logger = consola;

  public constructor() {
    super({
      presence: {
        status: PresenceUpdateStatus.Online,
        afk: false,
        activities: [
          { type: ActivityType.Watching, name: 'for chumps & champs' }
        ]
      },
      intents: IntentsBitField.Flags.GuildMessages
    });

    super
      .login(process.env.DISCORD_TOKEN as string)
      .catch(this.logger.error)
      .then(() => this.logger.info('Logged in to client!'))
      .then(() => this.register());
  }

  private register() {
    this.registerEvents();
    this.registerCommandsLocally();
    this.registerCommandsExternally();
  }

  private registerEvents() {
    //
  }

  private registerCommandsLocally() {
    Commands.forEach((command) => {
      this.logger.info(
        `Registering ${chalk.cyan(command.getName())} command locally...`
      )
    );
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
      .then(() => this.logger.success('Registered commands externally!'))
      .catch(this.logger.error);
  }
}
