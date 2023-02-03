import CronEvent from '../interfaces/CronEvent';
import GuildEvent from '../interfaces/GuildEvent';
import NewWeekEvent from './cron/NewWeekEvent';
import ClientReadyEvent from './guild/ClientReadyEvent';
import InteractionCreateEvent from './guild/InteractionCreateEvent';

export const CronEvents: CronEvent[] = [NewWeekEvent];
export const GuildEvents: GuildEvent<any>[] = [
  ClientReadyEvent,
  InteractionCreateEvent
];
