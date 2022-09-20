import { prisma } from "@database/prismaClient";

interface IChangeFamilyBeneficiary {
  id_beneficiary: string;
  cpfTitular: string;
}

export class ChangeFamilyBeneficiary {
  async execute({ id_beneficiary, cpfTitular }: IChangeFamilyBeneficiary) {
    const titular = await prisma.titular.findFirst({
      where: { cpf: cpfTitular },
    });

    const beneficiary = await prisma.beneficiary.update({
      where: { id: id_beneficiary },
      data: {
        titularId: titular?.id,
      },
      include: {
        titular: true,
      },
    });

    return beneficiary;
  }
}
