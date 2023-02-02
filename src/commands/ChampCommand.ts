import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import Bot from '../Bot';
import Command from '../classes/Command';
import { REASON_MAXIMUM_LENGTH, REASON_MINIMUM_LENGTH } from './constants';

const handler = (_bot: Bot, interaction: ChatInputCommandInteraction) => {
  const nominator = interaction.user;
  const nominee = interaction.options.getUser('user', true);
  const reason = interaction.options.getString('reason', true);

  interaction.reply({
    content: `${nominator} champed ${nominee} for ${reason}.`
  });
};

export default new Command(
  new SlashCommandBuilder()
    .setName('champ')
    .setDescription('Nominate a Champ of the Week.')
    .addUserOption((option) =>
      option
        .setName('user')
        .setDescription('Who do you want to nominate?')
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName('reason')
        .setDescription('This person is champy for...')
        .setMinLength(REASON_MINIMUM_LENGTH)
        .setMaxLength(REASON_MAXIMUM_LENGTH)
        .setRequired(true)
    )
    .toJSON(),
  handler
);
