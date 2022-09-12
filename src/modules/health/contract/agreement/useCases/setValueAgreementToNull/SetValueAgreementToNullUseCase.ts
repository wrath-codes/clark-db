import { prisma } from "@database/prismaClient";

export class SetValueAgreementToNullUseCase {
  async execute(id_agreement: string) {
    const agreement = await prisma.agreement.update({
      where: { id: id_agreement },
      data: {
        valueAgreement: {
          delete: true,
        },
      },
      include: { valueAgreement: true },
    });

    return agreement;
  }
}
