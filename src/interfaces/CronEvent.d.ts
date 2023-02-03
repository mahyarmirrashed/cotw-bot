import Bot from '../Bot';

export default interface CronEvent {
  name: string;
  time: string;
  handler: (bot: Bot) => void;
}
