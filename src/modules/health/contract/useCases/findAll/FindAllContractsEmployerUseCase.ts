import { prisma } from "@database/prismaClient";

export class FindAllContractsEmployerUseCase {
  async execute(id_employer: string) {
    const contracts = await prisma.contract.findMany({
      where: { employerId: id_employer },
      include: { operator: true },
    });

    return contracts;
  }
}
