import { config } from 'dotenv';
import Bot from './Bot';

// configure environment variables
config();

const REQUIRED_ENVVARS = ['DISCORD_TOKEN'];
const MISSING_ENVVARS = REQUIRED_ENVVARS.filter(
  (envVar) => !process.env[envVar]
);

const anyUnsetEnvVars = (): boolean => MISSING_ENVVARS.length === 0;

// run bot with no missing environment variables
if (anyUnsetEnvVars()) {
  new Bot();
} else {
  console.error(`Required variables missing: ${MISSING_ENVVARS.join(', ')}.`);
}
