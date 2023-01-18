import { CommandInteraction, SlashCommandBuilder } from 'discord.js';
import Bot from '../Bot';
import Command from '../classes/Command';

const callback = (_bot: Bot, interaction: CommandInteraction) => {
  interaction.reply({
    content: 'Received `chump` command.',
    ephemeral: true
  });
};

export default new Command(
  new SlashCommandBuilder()
    .setName('chump')
    .setDescription('Nominate a Chump of the Week.')
    .toJSON(),
  callback
);
