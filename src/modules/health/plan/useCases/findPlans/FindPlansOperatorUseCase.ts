import { prisma } from "@database/prismaClient";

export class FindPlansOperatorUseCase {
  async execute(id_operator: string) {
    const plans = await prisma.plan.findMany({
      where: { operatorId: id_operator },
    });

    return plans;
  }
}
