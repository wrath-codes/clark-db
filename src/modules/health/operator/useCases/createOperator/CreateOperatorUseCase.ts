import { prisma } from "@database/prismaClient";

import { slugifyName } from "@utils/format/slugifyName.util";

interface ICreateOperator {
  name: string;
  cnpj: string;
  website: string;
  street: string;
  number: number;
  complement: string;
  district: string;
  city: string;
  state: string;
  zipCode: string;
}

export class CreateOperatorUseCase {
  async execute({
    name,
    cnpj,
    website,
    street,
    number,
    complement,
    district,
    city,
    state,
    zipCode,
  }: ICreateOperator) {
    const slug = await slugifyName(name);

    const operator = await prisma.operator.create({
      data: {
        name,
        cnpj,
        website,
        slug,
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

    return operator;
  }
}
