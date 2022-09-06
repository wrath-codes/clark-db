import { prisma } from "@database/prismaClient";

export class FindPlanUseCase {
  async execute(id_plan: string) {
    const plan = await prisma.plan.findUnique({
      where: { id: id_plan },
    });

    return plan;
  }
}
