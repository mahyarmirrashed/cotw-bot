import { PrismaClient } from '@prisma/client';
import {
  ChannelType,
  ChatInputCommandInteraction,
  PermissionFlagsBits as PermissionBits,
  SlashCommandBuilder
} from 'discord.js';
import Bot from '../Bot';
import Command from '../classes/Command';

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
    interaction.reply({
      content: 'Channel must be a text channel.',
      ephemeral: true
    });
  } else if (!channel.permissionsFor(me).has(PermissionBits.SendMessages)) {
    interaction.reply({
      content: 'Missing message sending permissions.',
      ephemeral: true
    });
  } else {
    updateServerChannelId(bot.prisma, guild.id, channel.id)
      .then(() =>
        interaction.reply({
          content: `Set COTW channel to ${channel}.`,
          ephemeral: true
        })
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
