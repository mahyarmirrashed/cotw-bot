import { PrismaClient } from '@prisma/client';

const checkServerAndChannelMatch = (
  prisma: PrismaClient,
  serverId: string,
  channelId: string
) => {
  return prisma.server.findFirstOrThrow({
    where: {
      id: serverId,
      channelId
    }
  });
};

export default checkServerAndChannelMatch;
