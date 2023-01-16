import Bot from '../Bot';

export default interface GuildEvent<T> {
  name: string;
  callback: (bot: Bot, args: T) => void;
}
