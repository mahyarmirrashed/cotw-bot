import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import Bot from '../Bot';
import Command from '../classes/Command';

const callback = (_bot: Bot, interaction: ChatInputCommandInteraction) => {
  interaction.reply({
    content: 'Received `vote` command.',
    ephemeral: true
  });
};

export default new Command(
  new SlashCommandBuilder()
    .setName('vote')
    .setDescription("Vote for this week's Chump/Champ of the Week.")
    .toJSON(),
  callback
);
