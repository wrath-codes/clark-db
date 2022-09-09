import { prisma } from "@database/prismaClient";

interface IAddCopayment {
  id_agreement: string;
  description?: string;

  percentage?: number;
  examValue?: number;
  consultationValue?: number;
  admissionValue?: number;
}

export class AddCopaymentUseCase {
  async execute({
    id_agreement,
    description,

    percentage,
    examValue,
    consultationValue,
    admissionValue,
  }: IAddCopayment) {
    const agreementWithCopayment = await prisma.agreement.update({
      where: {
        id: id_agreement,
      },
      data: {
        coPayment: {
          create: {
            description,
            percentage,
            examValue,
            consultationValue,
            admissionValue,
          },
        },
      },
      include: {
        coPayment: true,
      },
    });

    return agreementWithCopayment;
  }
}
