import { prisma } from "@database/prismaClient";

export class ListHistoryBeneficiaryUseCase {
  async execute(id_beneficiary: string) {
    const beneficiary = await prisma.history.findFirst({
      where: { beneficiaryId: id_beneficiary },
      include: {
        agreementHistory: true,
        employmentHistory: true,
      },
    });

    return beneficiary;
  }
}
