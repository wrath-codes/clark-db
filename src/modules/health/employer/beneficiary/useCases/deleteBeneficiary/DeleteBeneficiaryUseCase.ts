import { prisma } from "@database/prismaClient";

export class DeleteBeneficiaryUseCase {
  async execute(id_beneficiary: string) {
    const beneficiaryToDelete = await prisma.beneficiary.findUnique({
      where: { id: id_beneficiary },
      include: { planCard: true },
    });

    if (beneficiaryToDelete?.planCard?.kind === "TITULAR") {
      await prisma.titular.delete({
        where: { cpf: beneficiaryToDelete?.cpf },
      });

      await prisma.beneficiary.delete({
        where: { id: id_beneficiary },
      });
    } else {
      await prisma.beneficiary.delete({
        where: { id: id_beneficiary },
      });
    }
  }
}
