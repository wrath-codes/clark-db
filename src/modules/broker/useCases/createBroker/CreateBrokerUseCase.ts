import { prisma } from "@database/prismaClient";

import { slugifyName } from "@utils/format/slugifyName.util";

interface ICreateBroker {
  name: string;
  cnpj: string;
}

export class CreateBrokerUseCase {
  async execute({ name, cnpj }: ICreateBroker) {
    const slug = await slugifyName(name);

    const broker = await prisma.broker.create({
      data: {
        name,
        slug,
        cnpj,
      },
    });

    return broker;
  }
}
