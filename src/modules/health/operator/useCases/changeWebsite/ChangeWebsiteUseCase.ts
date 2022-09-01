import { prisma } from "@database/prismaClient";

interface IChangeWebsiteOperator {
  id_operator: string;
  website: string;
}

export class ChangeWebsiteOperatorUseCase {
  async execute({ id_operator, website }: IChangeWebsiteOperator) {
    const operator = await prisma.operator.update({
      where: { id: id_operator },
      data: { website },
    });

    return operator;
  }
}
