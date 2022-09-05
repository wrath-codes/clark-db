import { prisma } from "@database/prismaClient";

export class DeleteContactOperatorUseCase {
  async execute(id_operator: string) {
    const operator = await prisma.operator.update({
      where: { id: id_operator },
      data: {
        contact: {
          delete: true,
        },
      },
    });

    return operator;
  }
}
