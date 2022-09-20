import { prisma } from "@database/prismaClient";

interface IAddToAgreementBeneficiary {
  id_agreement: string;
  id_beneficiary: string;
}

export class AddToAgreementBeneficiaryUseCase {
  async execute({ id_agreement, id_beneficiary }: IAddToAgreementBeneficiary) {
    const beneficiaryWithAgreement = await prisma.beneficiary.update({
      where: { id: id_beneficiary },
      data: {
        agreementId: id_agreement,
        history: {
          update: {
            agreementHistory: {
              create: {
                startDate: new Date(),
                isCurrent: true,
                agreementId: id_agreement,
              },
            },
          },
        },
      },
      include: {
        agreement: true,
        employer: true,
        history: {
          include: {
            agreementHistory: true,
          },
        },
      },
    });

    return beneficiaryWithAgreement;
  }
}
