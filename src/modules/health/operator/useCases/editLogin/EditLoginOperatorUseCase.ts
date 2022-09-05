import { prisma } from "@database/prismaClient";

interface IEditLoginOperator {
  id_operator: string;
  username?: string;
  password?: string;
}

export class EditLoginOperatorUseCase {
  async execute({ id_operator, username, password }: IEditLoginOperator) {
    const operatorWithLogin = await prisma.operator.update({
      where: { id: id_operator },
      data: {
        login: {
          update: {
            username,
            password,
          },
        },
      },
      include: { login: true },
    });

    return operatorWithLogin;
  }
}
