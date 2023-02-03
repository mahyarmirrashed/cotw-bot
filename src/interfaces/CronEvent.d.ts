import Bot from '../Bot';

export default interface CronEvent {
  frequency: string;
  handler: (bot: Bot) => void;
}
