import { PrismaClient } from '@prisma/client';
import { OAuth2Guild } from 'discord.js';
import Bot from '../../Bot';
import CronEvent from '../../interfaces/CronEvent';

// const MIDNIGHT_ON_MONDAY = '0 0 0 * * 1';

const announceVoteResults = (prisma: PrismaClient, guild: OAuth2Guild) => {
  //
};

const findCandidateWithMostChampVotes = async (
  prisma: PrismaClient,
  serverId: string
) => {
  return prisma.candidate
    .findMany({
      where: { serverId },
      include: {
        champVotes: true
      }
    })
    .then((candidates) =>
      candidates.sort(
        (candidateA, candidateB) =>
          candidateB.champVotes.length - candidateA.champVotes.length
      )
    )
    .then((candidates) =>
      candidates.filter(
        (candidate) =>
          candidate.champVotes.length === candidates[0].champVotes.length
      )
    );
};

const findCandidateWithMostChumpVotes = async (
  prisma: PrismaClient,
  serverId: string
) => {
  return prisma.candidate
    .findMany({
      where: { serverId },
      include: {
        chumpVotes: true
      }
    })
    .then((candidates) =>
      candidates.sort(
        (candidateA, candidateB) =>
          candidateB.chumpVotes.length - candidateA.chumpVotes.length
      )
    )
    .then((candidates) =>
      candidates.filter(
        (candidate) =>
          candidate.chumpVotes.length === candidates[0].chumpVotes.length
      )
    );
};

const handler = (bot: Bot) => {
  bot.guilds
    .fetch()
    .then((guilds) => {
      guilds.forEach((guild) => announceVoteResults(bot.prisma, guild));
    })
    .catch(bot.logger.error);

  // NOTE: after launch of this handler, we are on the next week
  // TODO: announce winner of last week votes for both champ and chump categories
  // TODO: (optional) empty out votes table
  // TODO: (optional) empty out candidates table
  // TODO: (optional) empty out eligibility table
  // TODO: announce new voting round and list all candidates and the associated reasons
  // TODO: migrate nominations to candidates and eligibilities
  // TODO: (optional) empty out nomination table
};

const NewWeekEvent: CronEvent = {
  name: 'newWeek',
  // time: MIDNIGHT_ON_MONDAY,
  time: '*/10 * * * * *',
  handler
};

export default NewWeekEvent;
