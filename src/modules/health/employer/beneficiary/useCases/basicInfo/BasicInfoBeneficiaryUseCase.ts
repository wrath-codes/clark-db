import { prisma } from "@database/prismaClient";

export class BasicInfoBeneficiaryUseCase {
  async execute(id_beneficiary: string) {
    const beneficiary = await prisma.beneficiary.findFirst({
      where: { id: id_beneficiary },
    });

    return beneficiary;
  }
}
