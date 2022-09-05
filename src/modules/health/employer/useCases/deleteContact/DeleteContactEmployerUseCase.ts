import { prisma } from "@database/prismaClient";

export class DeleteContactEmployerUseCase {
  async execute(id_employer: string) {
    const employer = await prisma.employer.update({
      where: { id: id_employer },
      data: {
        contact: {
          delete: true,
        },
      },
    });

    return employer;
  }
}
