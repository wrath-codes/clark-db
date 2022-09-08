import { prisma } from "@database/prismaClient";

export class CancelContractUseCase {
  async execute(id_contract: string) {
    const canceledContract = await prisma.contract.update({
      where: { id: id_contract },
      data: {
        status: "CANCELADO",
        endDate: new Date(),
      },
    });
    return canceledContract;
  }
}
