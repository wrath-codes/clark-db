import { prisma } from "@database/prismaClient";

export class DeleteLoginOperatorUseCase {
  async execute(id_operator: string) {
    const operatorWithoutLogin = await prisma.operator.update({
      where: { id: id_operator },
      data: {
        login: { delete: true },
      },
    });

    return operatorWithoutLogin;
  }
}
