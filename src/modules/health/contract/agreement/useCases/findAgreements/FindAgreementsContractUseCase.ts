import { prisma } from "@database/prismaClient";

export class FindAgreementsContractUseCase {
  async execute(id_contract: string) {
    const agreements = await prisma.agreement.findMany({
      where: { contractId: id_contract },
      include: {
        valuesAgreement: true,
        coPayment: true,
        valueAgreement: true,
      },
    });

    return agreements;
  }
}
