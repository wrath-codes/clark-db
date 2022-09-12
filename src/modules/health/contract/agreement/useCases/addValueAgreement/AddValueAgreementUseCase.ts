import { prisma } from "@database/prismaClient";

interface IAddValueAgreement {
  id_agreement: string;
  value: number;
}

export class AddValueAgreementUseCase {
  async execute({ id_agreement, value }: IAddValueAgreement) {
    const agreement = await prisma.agreement.update({
      where: { id: id_agreement },
      data: {
        valueAgreement: {
          create: {
            value,
          },
        },
      },
      include: {
        valueAgreement: true,
      },
    });

    return agreement;
  }
}
