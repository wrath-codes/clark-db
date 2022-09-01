import { prisma } from "@database/prismaClient";

import { slugifyName } from "@utils/format/slugifyName.util";

interface IChangeNameBroker {
  id_broker: string;
  name: string;
}

export class ChangeNameBrokerUseCase {
  async execute({ id_broker, name }: IChangeNameBroker) {
    const slug = await slugifyName(name);

    const broker = await prisma.broker.update({
      where: {
        id: id_broker,
      },
      data: {
        name,
        slug,
      },
    });

    return broker;
  }
}
