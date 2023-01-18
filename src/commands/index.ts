import Command from '../classes/Command';
import ChampCommand from './ChampCommand';
import ChumpCommand from './ChumpCommand';
import PingCommand from './PingCommand';
import SetCommand from './SetCommand';

const Commands: Command[] = [
  ChampCommand,
  ChumpCommand,
  PingCommand,
  SetCommand
];

export default Commands;
