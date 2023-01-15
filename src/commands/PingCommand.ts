import { CommandInteraction, SlashCommandBuilder } from 'discord.js';
import Bot from 'src/Bot';
import Command from 'src/interfaces/Command';

const PingCommandJSON = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Ping the bot.')
  .toJSON();

const PingCommandCallback = (_bot: Bot, interaction: CommandInteraction) => {
  interaction.reply({
    content: 'Pong!',
    ephemeral: true
  });
};

const PingCommand: Command = {
  JSON: PingCommandJSON,
  callback: PingCommandCallback
};

export default PingCommand;
