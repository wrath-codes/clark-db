import { prisma } from "@database/prismaClient";

export class FindAllBrokersUseCase {
  async execute() {
    const brokers = await prisma.broker.findMany();

    return brokers;
  }
}
