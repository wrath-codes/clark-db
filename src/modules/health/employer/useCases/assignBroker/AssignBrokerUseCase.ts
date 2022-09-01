import { prisma } from "@database/prismaClient";

export class AssignBrokerUseCase {
  async execute(id_employer: string, id_broker: string) {
    const employerWithBroker = await prisma.employer.update({
      where: {
        id: id_employer,
      },
      data: {
        brokerId: id_broker,
      },
      include: {
        broker: true,
      },
    });

    return employerWithBroker;
  }
}
