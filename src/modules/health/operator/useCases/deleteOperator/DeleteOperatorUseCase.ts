import { prisma } from "@database/prismaClient";

export class DeleteOperatorUseCase {
  async execute(id_operator: string) {
    const operator = await prisma.operator.delete({
      where: { id: id_operator },
    });

    return operator;
  }
}
