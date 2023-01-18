import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import Bot from '../Bot';
import Command from '../classes/Command';

const callback = (_bot: Bot, interaction: ChatInputCommandInteraction) => {
  const voter = interaction.user;
  const target = interaction.options.getUser('user');
  const category = interaction.options.getString('category');

  interaction.reply({
    content: `${voter} voted ${target} as this week's ${category}-of-the-week!`
  });
};

export default new Command(
  new SlashCommandBuilder()
    .setName('vote')
    .setDescription("Vote for this week's Chump/Champ of the Week.")
    .addUserOption((option) =>
      option
        .setName('user')
        .setDescription('Who are you voting for?')
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName('category')
        .setDescription('What are you voting them for?')
        .addChoices(
          { name: 'champ', value: 'champ' },
          { name: 'chump', value: 'chump' }
        )
        .setRequired(true)
    )
    .toJSON(),
  callback
);
