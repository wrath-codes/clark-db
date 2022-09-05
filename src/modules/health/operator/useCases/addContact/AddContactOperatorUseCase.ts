import { prisma } from "@database/prismaClient";

interface IAddContactOperator {
  id_operator: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export class AddContactOperatorUseCase {
  async execute({
    id_operator,
    firstName,
    lastName,
    email,
    phone,
  }: IAddContactOperator) {
    const operatorWithContact = await prisma.operator.update({
      where: { id: id_operator },
      data: {
        contact: {
          create: {
            firstName,
            lastName,
            email,
            phone,
          },
        },
      },
      include: { contact: true },
    });

    return operatorWithContact;
  }
}
