import consola from 'consola';
import {
  ActivityType,
  Client,
  IntentsBitField,
  PresenceUpdateStatus,
} from 'discord.js';

export default class Bot extends Client {
  private readonly logger = consola;

  public constructor() {
    super({
      presence: {
        status: PresenceUpdateStatus.Online,
        afk: false,
        activities: [
          {
            type: ActivityType.Watching,
            name: 'for chumps & champs',
          },
        ],
      },
      intents: IntentsBitField.Flags.GuildMessages,
    });

    super
      .login(process.env.DISCORD_TOKEN as string)
      .catch(this.logger.error)
      .then(() => this.logger.info('Logged in to client!'));

    this.registerEvents();
    this.registerSlashCommands();
  }

  private registerEvents(): void {
    //
  }

  private registerSlashCommands(): void {
    //
  }
}
