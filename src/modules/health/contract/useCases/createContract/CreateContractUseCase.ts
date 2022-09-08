import { prisma } from "@database/prismaClient";
import { ContractStatus } from "@prisma/client";

interface ICreateContract {
  number: string;
  startDate?: Date;
  endDate?: Date;
  status: ContractStatus;
  description?: string;

  id_employer: string;
  id_operator: string;
}

export class CreateContractUseCase {
  async execute({
    number,
    startDate,
    endDate,
    status,
    description,
    id_employer,
    id_operator,
  }: ICreateContract) {
    const contract = await prisma.contract.create({
      data: {
        number,
        startDate: startDate || new Date(),
        endDate: endDate || null,
        status,
        description,

        employerId: id_employer,
        operatorId: id_operator,
      },
      include: {
        employer: true,
        operator: true,
      },
    });

    return contract;
  }
}
