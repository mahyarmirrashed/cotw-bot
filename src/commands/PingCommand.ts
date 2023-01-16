import { CommandInteraction, SlashCommandBuilder } from 'discord.js';
import Bot from '../Bot';
import Command from '../classes/Command';

const callback = (_bot: Bot, interaction: CommandInteraction) => {
  interaction.reply({
    content: 'Pong!',
    ephemeral: true
  });
};

export default new Command(
  new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Ping the bot.')
    .toJSON(),
  callback
);
