import { prisma } from "@database/prismaClient";

interface IEditValuesAgreement {
  id_agreement: string;
  values: {
    age_0_18?: number;
    age_19_23?: number;
    age_24_28?: number;
    age_29_33?: number;
    age_34_38?: number;
    age_39_43?: number;
    age_44_48?: number;
    age_49_53?: number;
    age_54_58?: number;
    age_59_above?: number;
  };
}
export class EditValuesAgreementUseCase {
  async execute({ id_agreement, values }: IEditValuesAgreement) {
    const agreementToEdit = await prisma.agreement.findFirst({
      where: { id: id_agreement },
      include: { valuesAgreement: true },
    });

    const agreement = await prisma.agreement.update({
      where: { id: id_agreement },
      data: {
        valuesAgreement: {
          update: {
            age_0_18: values.age_0_18 || agreementToEdit?.valuesAgreement?.age_0_18,
            age_19_23: values.age_19_23 || agreementToEdit?.valuesAgreement?.age_19_23,
            age_24_28: values.age_24_28 || agreementToEdit?.valuesAgreement?.age_24_28,
            age_29_33: values.age_29_33 || agreementToEdit?.valuesAgreement?.age_29_33,
            age_34_38: values.age_34_38 || agreementToEdit?.valuesAgreement?.age_34_38,
            age_39_43: values.age_39_43 || agreementToEdit?.valuesAgreement?.age_39_43,
            age_44_48: values.age_44_48 || agreementToEdit?.valuesAgreement?.age_44_48,
            age_49_53: values.age_49_53 || agreementToEdit?.valuesAgreement?.age_49_53,
            age_54_58: values.age_54_58 || agreementToEdit?.valuesAgreement?.age_54_58,
            age_59_above: values.age_59_above || agreementToEdit?.valuesAgreement?.age_59_above,
          },
        },
      },
      include: { valuesAgreement: true },
    });

    return agreement;
  }
}
