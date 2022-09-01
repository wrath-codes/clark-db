import { prisma } from "@database/prismaClient";

import { slugifyName } from "@utils/format/slugifyName.util";

interface ICreateEmployer {
  name: string;
  cnpj: string;
}

export class CreateEmployerUseCase {
  async execute({ name, cnpj }: ICreateEmployer) {
    const slug = await slugifyName(name);

    const employer = await prisma.employer.create({
      data: {
        name,
        slug,
        cnpj,
      },
    });

    return employer;
  }
}
