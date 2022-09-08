import { prisma } from "@database/prismaClient";

export class FindValidContractsEmployerUseCase {
  async execute(id_employer: string) {
    const contracts = await prisma.contract.findMany({
      where: {
        employerId: id_employer,
        status: "VALIDO",
      },
      include: { operator: true },
    });

    return contracts;
  }
}
