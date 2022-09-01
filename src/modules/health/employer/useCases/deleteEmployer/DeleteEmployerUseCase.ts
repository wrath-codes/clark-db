import { prisma } from "@database/prismaClient";

export class DeleteEmployerUseCase {
  async execute(id_employer: string) {
    const employer = await prisma.employer.delete({
      where: { id: id_employer },
    });

    return employer;
  }
}
