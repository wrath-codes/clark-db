import { prisma } from "@database/prismaClient";

interface ICreateAgreement {
  id_contract: string;
  id_plan: string;
  description?: string;
}

export class CreateAgreementUseCase {
  async execute({ id_contract, id_plan }: ICreateAgreement) {
    const agreement = await prisma.agreement.create({
      data: {
        contractId: id_contract,
        planId: id_plan,
        description: "Insira uma descrição para o plano aqui",
      },
    });

    return agreement;
  }
}
