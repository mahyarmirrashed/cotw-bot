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
    private callback: CommandCallback
  ) {}

  public getJSON() {
    return this.json;
  }

  public getName() {
    return this.json.name;
  }

  public handle(bot: Bot, interaction: CommandInteraction) {
    this.callback(bot, interaction);
  }

  public inBlacklistedChannel() {
    return false;
  }

  public inWhitelistedChannel() {
    return false;
  }
}
