import { prisma } from "@database/prismaClient";

interface IAddDescriptionAgreement {
  id_agreement: string;
  description: string;
}

export class AddDescriptionAgreementUseCase {
  async execute({ id_agreement, description }: IAddDescriptionAgreement) {
    const agreement = await prisma.agreement.update({
      where: { id: id_agreement },
      data: { description },
    });

    return agreement;
  }
}
