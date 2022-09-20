import { prisma } from "@database/prismaClient";

export class TurnTitularBeneficiaryUseCase {
  async execute(id_beneficiary: string) {
    const benefiary = await prisma.beneficiary.findFirst({
      where: { id: id_beneficiary },
      include: {
        planCard: true,
        titular: true,
      },
    });

    await prisma.planCard.update({
      where: { id: benefiary?.planCard?.id },
      data: {
        kind: "TITULAR",
      },
    });

    const titular = await prisma.titular.create({
      data: {
        cpf: benefiary?.cpf || "",
      },
    });

    const updatedBeneficiary = await prisma.beneficiary.update({
      where: { id: benefiary?.id },
      data: {
        titularId: titular.id,
      },
      include: {
        planCard: true,
        titular: true,
      },
    });

    return updatedBeneficiary;
  }
}
