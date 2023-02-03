import { NominationType, PrismaClient } from '@prisma/client';

const insertNomination = (
  prisma: PrismaClient,
  serverId: string,
  nomineeId: string,
  nominatorId: string,
  reason: string,
  type: NominationType
) => {
  return prisma.nomination.create({
    data: {
      nomineeId,
      nominatorId,
      reason,
      type,
      server: {
        connect: { id: serverId }
      }
    }
  });
};

export default insertNomination;
