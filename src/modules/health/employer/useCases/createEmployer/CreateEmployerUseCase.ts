import { prisma } from "@database/prismaClient";

import { slugifyName } from "@utils/format/slugifyName.util";

interface ICreateEmployer {
  name: string;
  cnpj: string;
  street: string;
  number: number;
  complement: string;
  district: string;
  city: string;
  state: string;
  zipCode: string;
}

export class CreateEmployerUseCase {
  async execute({
    name,
    cnpj,
    street,
    number,
    complement,
    district,
    city,
    state,
    zipCode,
  }: ICreateEmployer) {
    const slug = await slugifyName(name);

    const employer = await prisma.employer.create({
      data: {
        name,
        slug,
        cnpj,
        address: {
          create: {
            street,
            number,
            complement,
            district,
            city,
            state,
            zipCode,
          },
        },
      },
      include: { address: true },
    });

    return employer;
  }
}
