import { prisma } from "@database/prismaClient";

interface IAddLoginOperator {
  id_operator: string;
  username: string;
  password: string;
}

export class AddLoginOperatorUseCase {
  async execute({ id_operator, username, password }: IAddLoginOperator) {
    const operatorWithLogin = await prisma.operator.update({
      where: { id: id_operator },
      data: {
        login: {
          create: {
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
