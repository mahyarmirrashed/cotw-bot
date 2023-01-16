import {
  Events,
  GuildChannel,
  Interaction,
  PermissionsBitField
} from 'discord.js';
import Bot from '../../Bot';
import GuildEvent from '../../interfaces/GuildEvent';

const callback = (bot: Bot, interaction: Interaction) => {
  const channel = interaction.channel;
  const permissions = interaction.memberPermissions;

  if (!interaction.isChatInputCommand()) return;
  if (!(channel instanceof GuildChannel)) return;
  if (!(permissions instanceof PermissionsBitField)) return;

  bot
    .findCommand(interaction.commandName)
    .then((command) => {
      if (!command.calledInPermittedChannel(channel.name)) {
        interaction.reply({
          content: 'Not permitted to use this command in this channel.',
          ephemeral: true
        });
      } else if (!command.calledWithNecessaryPermissions(permissions)) {
        interaction.reply({
          content: 'Not permitted to use this command with your permissions.',
          ephemeral: true
        });
      } else {
        command.handle(bot, interaction);
      }
    })
    .catch(bot.logger.error);
};

const InteractionCreateEvent: GuildEvent<Interaction> = {
  name: Events.InteractionCreate,
  callback
};

export default InteractionCreateEvent;
