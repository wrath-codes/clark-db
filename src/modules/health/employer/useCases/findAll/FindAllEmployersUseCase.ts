import { prisma } from "@database/prismaClient";

export class FindAllEmployersUseCase {
  async execute() {
    const employers = await prisma.employer.findMany();

    return employers;
  }
}
