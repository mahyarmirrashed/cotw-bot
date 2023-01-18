import {
  ChannelType,
  ChatInputCommandInteraction,
  PermissionFlagsBits,
  SlashCommandBuilder
} from 'discord.js';
import Bot from '../Bot';
import Command from '../classes/Command';

const callback = (_bot: Bot, interaction: ChatInputCommandInteraction) => {
  const channel = interaction.channel;
  const me = interaction.guild?.members.me;

  if (channel === null) return;
  if (me === null || me === undefined) return;

  if (channel.type !== ChannelType.GuildText) {
    interaction.reply({
      content: 'Channel must be a text channel.',
      ephemeral: true
    });
  } else if (
    !channel.permissionsFor(me).has(PermissionFlagsBits.SendMessages)
  ) {
    interaction.reply({
      content: 'Do not have permissions to send messages in this channel.',
      ephemeral: true
    });
  } else {
    interaction.reply({
      content: `Set ${channel} as the COTW channel.`,
      ephemeral: true
    });
  }
};

export default new Command(
  new SlashCommandBuilder()
    .setName('set')
    .setDescription('Set this channel as the COTW channel.')
    .toJSON(),
  callback
);
