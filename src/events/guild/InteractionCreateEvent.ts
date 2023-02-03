import {
  Events,
  GuildChannel,
  Interaction,
  PermissionsBitField
} from 'discord.js';
import Bot from '../../Bot';
import GuildEvent from '../../interfaces/GuildEvent';

const handler = (bot: Bot, interaction: Interaction) => {
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
        try {
          command.handle(bot, interaction);
        } catch (err) {
          bot.logger.error(`Terrible things happened: ${err}`);
        }
      }
    })
    .catch(bot.logger.error);
};

const InteractionCreateEvent: GuildEvent<Interaction> = {
  name: Events.InteractionCreate,
  handler
};

export default InteractionCreateEvent;
