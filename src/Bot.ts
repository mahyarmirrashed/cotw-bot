import {
  ActivityType,
  Client,
  IntentsBitField,
  PresenceUpdateStatus,
} from 'discord.js';

export default class Bot extends Client {
  public constructor() {
    super({
      // makeCache: {},
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
      sweepers: {},
    });

    super.login(process.env.DISCORD_TOKEN as string).catch(console.error);
  }
}
