import { prisma } from "@database/prismaClient";

import { slugifyName } from "@utils/slugifyName.util";

interface ICreateOperator {
  name: string;
  cnpj: string;
  website: string;
}

export class CreateOperatorUseCase {
  async execute({ name, cnpj, website }: ICreateOperator) {
    const slug = await slugifyName(name);

    const operator = await prisma.operator.create({
      data: {
        name,
        cnpj,
        website,
        slug,
      },
    });

    return operator;
  }
}
