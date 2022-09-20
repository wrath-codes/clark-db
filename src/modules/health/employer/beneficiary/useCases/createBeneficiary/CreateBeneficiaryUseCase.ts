import { prisma } from "@database/prismaClient";
import { MaritalStatus, PlanCardKind, Sex } from "@prisma/client";

interface ICreateBeneficiary {
  firstName: string;
  lastName: string;
  cpf: string;
  dateOfBirth: Date;
  email?: string;
  phone?: string;
  sex?: Sex;
  maritalStatus?: MaritalStatus;

  id_employer: string;

  planCardNumber: string;
  kind: PlanCardKind;

  cpfTitular?: string;
}

export class CreateBeneficiaryUseCase {
  async execute({
    firstName,
    lastName,
    cpf,
    dateOfBirth,
    email,
    phone,
    sex,
    maritalStatus,
    id_employer,
    planCardNumber,
    kind,
    cpfTitular,
  }: ICreateBeneficiary) {
    const beneficiary = await prisma.beneficiary.create({
      data: {
        firstName,
        lastName,
        cpf,
        dateOfBirth,
        email,
        phone,
        sex,
        maritalStatus,
        employerId: id_employer,
        planCard: {
          create: {
            number: planCardNumber,
            kind,
          },
        },
        history: {
          create: {
            employmentHistory: {
              create: {
                employerId: id_employer,
                startDate: new Date(),
                isCurrent: true,
              },
            },
          },
        },
      },
    });

    let beneficiaryWithTitular;
    if (kind === "TITULAR" && !cpfTitular) {
      beneficiaryWithTitular = await prisma.beneficiary.update({
        where: { id: beneficiary.id },
        data: {
          titular: {
            create: {
              cpf,
            },
          },
        },
        include: {
          titular: true,
          employer: true,
          planCard: true,
          history: {
            include: {
              employmentHistory: true,
              agreementHistory: true,
            },
          },
        },
      });
    } else {
      const titularToAdd = await prisma.titular.findFirst({
        where: { cpf: cpfTitular },
      });
      beneficiaryWithTitular = await prisma.beneficiary.update({
        where: { id: beneficiary.id },
        data: {
          titularId: titularToAdd?.id,
        },
        include: {
          titular: true,
          employer: true,
          planCard: true,
          history: {
            include: {
              employmentHistory: true,
              agreementHistory: true,
            },
          },
        },
      });
    }
    return beneficiaryWithTitular;
  }
}
