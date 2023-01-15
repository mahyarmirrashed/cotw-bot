import {
  CommandInteraction,
  RESTPostAPIChatInputApplicationCommandsJSONBody
} from 'discord.js';
import Bot from 'src/Bot';

export default interface Command {
  JSON: RESTPostAPIChatInputApplicationCommandsJSONBody;
  callback: (bot: Bot, interaction: CommandInteraction) => void;
}
