import { NominationType } from '@prisma/client';
import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import Bot from '../Bot';
import Command from '../classes/Command';
import checkServerAndChannelMatch from '../helpers/CheckServerAndChannelMatch';
import insertNomination from '../helpers/InsertNomination';
import { REASON_MAXIMUM_LENGTH, REASON_MINIMUM_LENGTH } from './constants';

const handler = (bot: Bot, interaction: ChatInputCommandInteraction) => {
  const nominator = interaction.user;
  const nominee = interaction.options.getUser('user', true);
  const reason = interaction.options.getString('reason', true);

  const channel = interaction.channel;
  const guild = interaction.guild;

  if (!channel) return;
  if (!guild) return;

  checkServerAndChannelMatch(bot.prisma, guild.id, channel.id)
    .then((server) =>
      insertNomination(
        bot.prisma,
        server.id,
        nominee.id,
        nominator.id,
        reason,
        NominationType.CHAMP
      )
    )
    .then(() =>
      interaction.reply({
        content: `${nominator} champed ${nominee} for ${reason}.`
      })
    )
    .catch(bot.logger.error);
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
