import { prisma } from "@database/prismaClient";

export class ListAssignedEmployersUseCase {
  async execute(id_broker: string) {
    const assignedEmployers = await prisma.employer.findMany({
      where: { brokerId: id_broker },
    });

    return assignedEmployers;
  }
}
