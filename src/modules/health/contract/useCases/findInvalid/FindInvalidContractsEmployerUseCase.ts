import { prisma } from "@database/prismaClient";

export class FindInvalidContractsEmployerUseCase {
  async execute(id_employer: string) {
    const contracts = await prisma.contract.findMany({
      where: {
        employerId: id_employer,
        status: { not: "CANCELADO" || "EXPIRADO" },
      },
      include: { operator: true },
    });

    return contracts;
  }
}
