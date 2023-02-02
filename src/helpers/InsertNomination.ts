import { NominationType, PrismaClient } from '@prisma/client';
import moment from 'moment';

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
      },
      weekNumber: moment().isoWeek()
    }
  });
};

export default insertNomination;
