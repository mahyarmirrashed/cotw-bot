import Bot from 'src/Bot';
import {
  RESTPostAPIChatInputApplicationCommandsJSONBody,
  CommandInteraction
} from 'discord.js';

type Command = {
  JSON: RESTPostAPIChatInputApplicationCommandsJSONBody;
  callback: (bot: Bot, interaction: CommandInteraction) => void;
};

export default Command;
