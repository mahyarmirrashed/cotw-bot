import { CommandInteraction, SlashCommandBuilder } from 'discord.js';
import Bot from '../Bot';
import Command from '../classes/Command';

const callback = (_bot: Bot, interaction: CommandInteraction) => {
  interaction.reply({
    content: 'Received `champ` command.',
    ephemeral: true
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
        .setRequired(true)
    )
    .toJSON(),
  callback
);
