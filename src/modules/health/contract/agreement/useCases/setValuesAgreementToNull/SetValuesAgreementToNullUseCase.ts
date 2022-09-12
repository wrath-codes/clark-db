import { prisma } from "@database/prismaClient";

export class SetValuesAgreementToNullUseCase {
  async execute(id_agreement: string) {
    const agreement = await prisma.agreement.update({
      where: { id: id_agreement },
      data: {
        valuesAgreement: {
          delete: true,
        },
      },
      include: { valuesAgreement: true },
    });

    return agreement;
  }
}
