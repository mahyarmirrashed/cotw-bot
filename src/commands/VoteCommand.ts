import { NominationType, PrismaClient } from '@prisma/client';
import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import Bot from '../Bot';
import Command from '../classes/Command';

const checkCandidateExists = async (
  prisma: PrismaClient,
  serverId: string,
  candidateId: string,
  nominationType: NominationType
) => {
  return prisma.candidate.findFirstOrThrow({
    where: {
      candidateId,
      serverId
    },
    include: {
      eligibility: {
        where: {
          type: nominationType
        }
      }
    }
  });
};

const createVote = async (
  prisma: PrismaClient,
  serverId: string,
  voterId: string
) => {
  return prisma.vote.upsert({
    where: {
      serverId_voterId: {
        serverId,
        voterId
      }
    },
    create: {
      server: {
        connect: { id: serverId }
      },
      voterId
    },
    update: {}
  });
};

const updateVote = async (
  prisma: PrismaClient,
  serverId: string,
  voterId: string,
  candidateId: string,
  nominationType: NominationType
) => {
  return prisma.candidate
    .findFirstOrThrow({
      where: {
        candidateId,
        serverId
      }
    })
    .then((candidate) =>
      prisma.vote.update({
        where: {
          serverId_voterId: {
            serverId,
            voterId
          }
        },
        data: {
          [nominationType === NominationType.CHAMP ? 'champ' : 'chump']: {
            connect: {
              id: candidate.id
            }
          }
        }
      })
    );
};

const handler = (bot: Bot, interaction: ChatInputCommandInteraction) => {
  const voter = interaction.user;
  const target = interaction.options.getUser('user', true);
  const type = <NominationType>interaction.options.getString('category', true);

  const guild = interaction.guild;

  if (!guild) return;

  checkCandidateExists(bot.prisma, guild.id, target.id, type)
    .catch(() =>
      interaction.reply({
        content: `${voter} is not eligible to be voted as ${type}-of-the-week.`,
        ephemeral: true
      })
    )
    .then(() => createVote(bot.prisma, guild.id, voter.id))
    .then(() => updateVote(bot.prisma, guild.id, voter.id, target.id, type))
    .then(() =>
      interaction.reply({
        content: `${voter} voted ${target} as this week's ${type}-of-the-week!`
      })
    )
    .catch(bot.logger.error);
};

export default new Command(
  new SlashCommandBuilder()
    .setName('vote')
    .setDescription("Vote for this week's Chump/Champ of the Week.")
    .addUserOption((option) =>
      option
        .setName('user')
        .setDescription('Who are you voting for?')
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName('category')
        .setDescription('What are you voting them for?')
        .addChoices(
          { name: 'champ', value: NominationType.CHAMP },
          { name: 'chump', value: NominationType.CHUMP }
        )
        .setRequired(true)
    )
    .toJSON(),
  handler
);
