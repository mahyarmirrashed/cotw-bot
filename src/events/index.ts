import CronEvent from '../interfaces/CronEvent';
import GuildEvent from '../interfaces/GuildEvent';
import ClientReadyEvent from './guild/ClientReadyEvent';
import InteractionCreateEvent from './guild/InteractionCreateEvent';

export const CronEvents: CronEvent[] = [];
export const GuildEvents: GuildEvent<any>[] = [
  ClientReadyEvent,
  InteractionCreateEvent
];
