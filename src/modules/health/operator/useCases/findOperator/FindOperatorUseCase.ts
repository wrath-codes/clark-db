import { prisma } from "@database/prismaClient";

export class FindOperatorUseCase {
  async execute(id_operator: string) {
    const operator = await prisma.operator.findFirst({
      where: { id: id_operator },
    });

    return operator;
  }
}
