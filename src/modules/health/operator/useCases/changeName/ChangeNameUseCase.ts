import { prisma } from "@database/prismaClient";

import { slugifyName } from "@utils/slugifyName.util";

interface IChangeName {
  id_operator: string;
  name: string;
}

export class ChangeNameUseCase {
  async execute({ id_operator, name }: IChangeName) {
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
