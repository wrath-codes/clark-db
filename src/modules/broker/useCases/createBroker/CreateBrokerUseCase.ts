import { prisma } from "@database/prismaClient";

import { slugifyName } from "@utils/format/slugifyName.util";

interface ICreateBroker {
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

export class CreateBrokerUseCase {
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
  }: ICreateBroker) {
    const slug = await slugifyName(name);

    const broker = await prisma.broker.create({
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

    return broker;
  }
}
