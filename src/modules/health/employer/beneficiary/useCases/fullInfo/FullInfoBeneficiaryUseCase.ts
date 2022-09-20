import { prisma } from "@database/prismaClient";

export class FullInfoBeneficiaryUseCase {
  async execute(id_beneficiary: string) {
    const beneficiary = await prisma.beneficiary.findFirst({
      where: { id: id_beneficiary },
      include: {
        employer: true,
        agreement: true,
        titular: true,
        history: {
          include: {
            employmentHistory: true,
            agreementHistory: true,
          },
        },
        address: true,
      },
    });

    return beneficiary;
  }
}
