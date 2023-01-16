import {
  CommandInteraction,
  RESTPostAPIChatInputApplicationCommandsJSONBody
} from 'discord.js';
import Bot from '../Bot';

type CommandJSON = RESTPostAPIChatInputApplicationCommandsJSONBody;
type CommandCallback = (bot: Bot, interaction: CommandInteraction) => void;

export default class Command {
  public constructor(
    private json: CommandJSON,
    private callback: CommandCallback,
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
}
