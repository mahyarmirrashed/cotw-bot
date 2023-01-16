import { Events } from 'discord.js';
import Bot from '../../Bot';
import GuildEvent from '../../interfaces/GuildEvent';

const callback = (bot: Bot) => {
  if (bot.user) {
    bot.logger.success('Logged into client!');
  } else {
    bot.logger.error('Unable to log into client!');
  }
};

const ClientReadyEvent: GuildEvent<unknown> = {
  name: Events.ClientReady,
  callback
};

export default ClientReadyEvent;
