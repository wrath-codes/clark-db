import { prisma } from "@database/prismaClient";
import { Reach } from "@prisma/client";

interface ICreatePlan {
  id_operator: string;
  name: string;
  reach: Reach;
  ans_register: string;
  obstetric?: boolean;
  outpatient?: boolean;
  hospital?: boolean;
}

export class CreatePlanUseCase {
  async execute({
    id_operator,
    name,
    reach,
    ans_register,
    obstetric,
    outpatient,
    hospital,
  }: ICreatePlan) {
    const plan = await prisma.plan.create({
      data: {
        operatorId: id_operator,
        name,
        reach,
        ansRegister: ans_register,
        obstetric: obstetric || false,
        outpatient: outpatient || false,
        hospital: hospital || false,
      },
    });

    return plan;
  }
}
