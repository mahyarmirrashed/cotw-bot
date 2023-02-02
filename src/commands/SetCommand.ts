import { PrismaClient } from '@prisma/client';
import {
  ChannelType,
  ChatInputCommandInteraction,
  PermissionFlagsBits as PermissionBits,
  SlashCommandBuilder
} from 'discord.js';
import Bot from '../Bot';
import Command from '../classes/Command';

const sendEphemeralReply = (
  interaction: ChatInputCommandInteraction,
  content: string
) => interaction.reply({ content, ephemeral: true });

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

const handler = (bot: Bot, interaction: ChatInputCommandInteraction) => {
  const channel = interaction.channel;
  const guild = interaction.guild;

  if (!channel) return;
  if (!guild) return;

  const me = guild.members.me;

  if (!me) return;

  if (channel.type !== ChannelType.GuildText) {
    sendEphemeralReply(interaction, 'Channel must be a text channel.');
  } else if (!channel.permissionsFor(me).has(PermissionBits.SendMessages)) {
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
  handler
);
