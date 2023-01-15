import Bot from 'src/Bot';
import {
  RESTPostAPIChatInputApplicationCommandsJSONBody,
  CommandInteraction
} from 'discord.js';

export type Command = {
  JSON: RESTPostAPIChatInputApplicationCommandsJSONBody;
  callback: (bot: Bot, interaction: CommandInteraction) => void;
};
