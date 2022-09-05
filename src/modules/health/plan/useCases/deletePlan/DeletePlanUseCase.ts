import { prisma } from "@database/prismaClient";

export class DeletePlanUseCase {
  async execute(id_plan: string) {
    await prisma.plan.delete({
      where: { id: id_plan },
    });
  }
}
