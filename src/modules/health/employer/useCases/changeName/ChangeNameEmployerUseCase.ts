import { prisma } from "@database/prismaClient";

import { slugifyName } from "@utils/format/slugifyName.util";

interface IChangeNameEmployer {
  id_employer: string;
  name: string;
}

export class ChangeNameEmployerUseCase {
  async execute({ id_employer, name }: IChangeNameEmployer) {
    const slug = await slugifyName(name);

    const employer = await prisma.employer.update({
      where: {
        id: id_employer,
      },
      data: {
        name,
        slug,
      },
    });

    return employer;
  }
}
