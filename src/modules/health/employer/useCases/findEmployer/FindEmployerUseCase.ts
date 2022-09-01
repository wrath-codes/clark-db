import { prisma } from "@database/prismaClient";

export class FindEmployerUseCase {
  async execute(id_employer: string) {
    const employer = await prisma.employer.findFirst({
      where: { id: id_employer },
      include: {
        broker: true,
      },
    });

    return employer;
  }
}
