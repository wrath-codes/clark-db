import { prisma } from "@database/prismaClient";

export class FindBrokerUseCase {
  async execute(id_broker: string) {
    const broker = await prisma.broker.findFirst({
      where: { id: id_broker },
    });

    return broker;
  }
}
