import { prisma } from "@database/prismaClient";

interface IEditCopayment {
  id_agreement: string;
  percentage?: number;
  examValue?: number;
  consultationValue?: number;
  admissionValue?: number;
  description?: string;
}

export class EditCopaymentUseCase {
  async execute({
    id_agreement,
    percentage,
    examValue,
    consultationValue,
    admissionValue,
    description,
  }: IEditCopayment) {
    const agreementToEdit = await prisma.agreement.findFirst({
      where: { id: id_agreement },
      include: { coPayment: true },
    });

    const agreement = await prisma.agreement.update({
      where: { id: id_agreement },
      data: {
        coPayment: {
          update: {
            percentage: percentage || agreementToEdit?.coPayment?.percentage,
            examValue: examValue || agreementToEdit?.coPayment?.examValue,
            consultationValue: consultationValue || agreementToEdit?.coPayment?.consultationValue,
            admissionValue: admissionValue || agreementToEdit?.coPayment?.admissionValue,
            description: description || agreementToEdit?.coPayment?.description,
          },
        },
      },
      include: { coPayment: true },
    });

    return agreement;
  }
}
