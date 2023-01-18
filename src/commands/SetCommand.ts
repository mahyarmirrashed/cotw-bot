import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import Bot from '../Bot';
import Command from '../classes/Command';

const callback = (_bot: Bot, interaction: ChatInputCommandInteraction) => {
  interaction.reply({
    content: 'Received `set` command.',
    ephemeral: true
  });
};

export default new Command(
  new SlashCommandBuilder()
    .setName('set')
    .setDescription('Set the COTW channel.')
    .toJSON(),
  callback
);
