import Bot from '../Bot';

export default interface GuildEvent<T> {
  name: string;
  handler: (bot: Bot, args: T) => void;
}
