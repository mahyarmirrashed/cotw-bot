import { ChatInputCommandInteraction } from 'discord.js';

const sendEphemeralReply = (
  interaction: ChatInputCommandInteraction,
  content: string
) => interaction.reply({ content, ephemeral: true });

export default sendEphemeralReply;
