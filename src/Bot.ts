import {
  ActivityType,
  Client,
  IntentsBitField,
  PresenceUpdateStatus,
} from 'discord.js';

export default class Bot extends Client {
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
      .catch(console.error)
      .then(() => console.log('Logged in to client!'));
  }
}
