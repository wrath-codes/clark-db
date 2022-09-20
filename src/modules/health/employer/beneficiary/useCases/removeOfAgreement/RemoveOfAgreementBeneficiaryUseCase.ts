import { prisma } from "@database/prismaClient";

export class RemoveOfAgreementBeneficiaryUseCase {
  async execute(id_beneficiary: string) {
    const history = await prisma.history.findFirst({
      where: { beneficiaryId: id_beneficiary },
    });

    const agreementHistory = await prisma.agreementHistory.findFirst({
      where: { historyId: history?.id, isCurrent: true },
    });

    const beneficiaryUpdated = await prisma.beneficiary.update({
      where: { id: id_beneficiary },
      data: {
        agreement: {
          disconnect: true,
        },
        history: {
          update: {
            agreementHistory: {
              update: {
                where: { id: agreementHistory?.id },
                data: {
                  isCurrent: false,
                  endDate: new Date(),
                },
              },
            },
          },
        },
      },
      include: {
        agreement: true,
        history: {
          include: {
            agreementHistory: true,
          },
        },
      },
    });

    return beneficiaryUpdated;
  }
}
