import { prisma } from "@database/prismaClient";

export class DeleteBrokerUseCase {
  async execute(id_broker: string) {
    const broker = await prisma.broker.delete({
      where: { id: id_broker },
    });

    return broker;
  }
}
