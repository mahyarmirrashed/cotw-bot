import {
  ChatInputCommandInteraction,
  PermissionsBitField,
  RESTPostAPIChatInputApplicationCommandsJSONBody
} from 'discord.js';
import Bot from '../Bot';

type CommandJSON = RESTPostAPIChatInputApplicationCommandsJSONBody;
type CommandHandler = (
  bot: Bot,
  interaction: ChatInputCommandInteraction
) => void;

export default class Command {
  public constructor(
    private json: CommandJSON,
    private handler: CommandHandler,
    private necessaryPermissions: bigint[] = [],
    private blacklistedChannels: string[] = [],
    private whitelistedChannels: string[] = []
  ) {}

  public calledInPermittedChannel(channel: string) {
    return (
      !this.calledInBlacklistedChannel(channel) &&
      this.calledInWhitelistedChannel(channel)
    );
  }

  public calledInBlacklistedChannel(channel: string) {
    if (this.blacklistedChannels.length === 0) return false;

    return this.blacklistedChannels.some(
      (blacklistedChannel) => blacklistedChannel === channel
    );
  }

  public calledInWhitelistedChannel(channel: string) {
    if (this.whitelistedChannels.length === 0) return true;

    return this.whitelistedChannels.some(
      (whitelistedChannel) => whitelistedChannel === channel
    );
  }

  public calledWithNecessaryPermissions(permissions: PermissionsBitField) {
    return permissions.has(this.necessaryPermissions);
  }

  public getJSON() {
    return this.json;
  }

  public getName() {
    return this.json.name;
  }

  public handle(bot: Bot, interaction: ChatInputCommandInteraction) {
    this.handler(bot, interaction);
  }
}
