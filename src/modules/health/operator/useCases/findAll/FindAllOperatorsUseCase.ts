import { prisma } from "@database/prismaClient";

export class FindAllOperatorsUseCase {
  async execute() {
    const operators = await prisma.operator.findMany();

    return operators;
  }
}
