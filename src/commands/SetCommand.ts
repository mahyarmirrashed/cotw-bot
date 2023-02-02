import { PrismaClient } from '@prisma/client';
import {
  ChannelType,
  ChatInputCommandInteraction,
  PermissionFlagsBits,
  SlashCommandBuilder
} from 'discord.js';
import Bot from '../Bot';
import Command from '../classes/Command';
import sendEphemeralReply from '../helpers/SendEphemeralReply';

const updateServerChannelId = async (
  prisma: PrismaClient,
  serverId: string,
  channelId: string
) => {
  return prisma.server.upsert({
    where: { id: serverId },
    create: {
      id: serverId,
      channelId
    },
    update: {
      channelId
    }
  });
};

const callback = (bot: Bot, interaction: ChatInputCommandInteraction) => {
  const channel = interaction.channel;
  const guild = interaction.guild;

  if (channel === null) return;
  if (guild === null) return;

  const me = guild.members.me;

  if (me === null) return;

  if (channel.type !== ChannelType.GuildText) {
    sendEphemeralReply(interaction, 'Channel must be a text channel.');
  } else if (
    !channel.permissionsFor(me).has(PermissionFlagsBits.SendMessages)
  ) {
    sendEphemeralReply(interaction, 'Missing message sending permissions.');
  } else {
    updateServerChannelId(bot.prisma, guild.id, channel.id)
      .then(() =>
        sendEphemeralReply(interaction, `Set COTW channel to ${channel}.`)
      )
      .catch(bot.logger.error);
  }
};

export default new Command(
  new SlashCommandBuilder()
    .setName('set')
    .setDescription('Set this channel as the COTW channel.')
    .toJSON(),
  callback
);
