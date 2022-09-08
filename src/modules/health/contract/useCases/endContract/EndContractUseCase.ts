import { prisma } from "@database/prismaClient";

export class EndContractUseCase {
  async execute(id_contract: string) {
    const endedContract = await prisma.contract.update({
      where: { id: id_contract },
      data: {
        status: "EXPIRADO",
        endDate: new Date(),
      },
    });
    return endedContract;
  }
}
