import Bot from '../Bot';

export default interface CronEvent {
  frequency: string;
  callback: (bot: Bot) => void;
}
