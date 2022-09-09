import { prisma } from "@database/prismaClient";

export class FindContractUseCase {
  async execute(id_contract: string) {
    const contract = await prisma.contract.findFirst({
      where: { id: id_contract },
    });

    return contract;
  }
}
