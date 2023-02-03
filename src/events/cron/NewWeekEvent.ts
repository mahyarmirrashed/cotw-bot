import Bot from '../../Bot';
import CronEvent from '../../interfaces/CronEvent';

const MIDNIGHT_ON_MONDAY = '0 0 0 * * 1';

const handler = (_bot: Bot) => {};

const NewWeekEvent: CronEvent = {
  name: 'newWeek',
  time: MIDNIGHT_ON_MONDAY,
  handler
};

export default NewWeekEvent;
