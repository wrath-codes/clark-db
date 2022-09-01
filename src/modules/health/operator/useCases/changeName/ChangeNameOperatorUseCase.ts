import { prisma } from "@database/prismaClient";

import { slugifyName } from "@utils/format/slugifyName.util";

interface IChangeNameOperator {
  id_operator: string;
  name: string;
}

export class ChangeNameOperatorUseCase {
  async execute({ id_operator, name }: IChangeNameOperator) {
    const slug = await slugifyName(name);

    const operator = await prisma.operator.update({
      where: {
        id: id_operator,
      },
      data: {
        name,
        slug,
      },
    });

    return operator;
  }
}
