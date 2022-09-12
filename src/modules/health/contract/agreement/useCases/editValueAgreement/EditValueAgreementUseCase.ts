import { prisma } from "@database/prismaClient";

interface IEditValueAgreement {
  id_agreement: string;
  value: number;
}

export class EditValueAgreementUseCase {
  async execute({ id_agreement, value }: IEditValueAgreement) {
    const agreementToEdit = await prisma.agreement.findFirst({
      where: { id: id_agreement },
      include: { valueAgreement: true },
    });

    const agreement = await prisma.agreement.update({
      where: { id: id_agreement },
      data: {
        valueAgreement: {
          update: {
            value: value || agreementToEdit?.valueAgreement?.value,
          },
        },
      },
      include: { valueAgreement: true },
    });

    return agreement;
  }
}
