import { prisma } from "@database/prismaClient";

export class FireBeneficiaryUseCase {
  async execute(id_beneficiary: string) {
    const history = await prisma.history.findFirst({
      where: { beneficiaryId: id_beneficiary },
    });

    const employmentHistory = await prisma.employmentHistory.findFirst({
      where: { historyId: history?.id, isCurrent: true },
    });

    const beneficiaryUpdated = await prisma.beneficiary.update({
      where: { id: id_beneficiary },
      data: {
        employer: {
          disconnect: true,
        },
        history: {
          update: {
            employmentHistory: {
              update: {
                where: { id: employmentHistory?.id },
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
        employer: true,
        history: {
          include: {
            employmentHistory: true,
          },
        },
      },
    });

    return beneficiaryUpdated;
  }
}
