import { CommandInteraction, SlashCommandBuilder } from 'discord.js';
import Bot from 'src/Bot';

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

export default {
  JSON: PingCommandJSON,
  callback: PingCommandCallback
};
