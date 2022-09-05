import { prisma } from "@database/prismaClient";

interface IEditContactOperator {
  id_operator: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
}

export class EditContactOperatorUseCase {
  async execute({
    id_operator,
    firstName,
    lastName,
    email,
    phone,
  }: IEditContactOperator) {
    const operator = await prisma.operator.update({
      where: { id: id_operator },
      data: {
        contact: {
          update: {
            firstName,
            lastName,
            email,
            phone,
          },
        },
      },
      include: {
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
