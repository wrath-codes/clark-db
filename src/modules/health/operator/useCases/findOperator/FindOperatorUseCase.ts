import { prisma } from "@database/prismaClient";

export class FindOperatorUseCase {
  async execute(id_operator: string) {
    const operator = await prisma.operator.findFirst({
      where: { id: id_operator },
      include: {
        login: true,
        contact: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
          },
        },
      },
    });

    return operator;
  }
}
