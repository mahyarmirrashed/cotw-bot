import { Command } from './types/Command.d';
import consola from 'consola';
import {
  ActivityType,
  Client,
  IntentsBitField,
  PresenceUpdateStatus
} from 'discord.js';
import PingCommand from './commands/PingCommand';

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
    const commands: Command[] = [PingCommand];

    commands.forEach((command) =>
      this.logger.info(`Registering ${command.JSON.name} command locally...`)
    );
  }

  private registerCommandsExternally() {
    //
  }
}
