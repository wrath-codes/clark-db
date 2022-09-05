import { prisma } from "@database/prismaClient";
import { Reach } from "@prisma/client";

import { slugifyName } from "@utils/format/slugifyName.util";

interface ICreatePlan {
  id_operator: string;
  name: string;
  reach: Reach;
  ansRegister: string;
  obstetric?: boolean;
  outpatient?: boolean;
  hospital?: boolean;
}

export class CreatePlanUseCase {
  async execute({
    id_operator,
    name,
    reach,
    ansRegister,
    obstetric,
    outpatient,
    hospital,
  }: ICreatePlan) {
    const plan = await prisma.plan.create({
      data: {
        operatorId: id_operator,
        name,
        reach,
        slug: await slugifyName(name),
        ansRegister,
        obstetric: obstetric || false,
        outpatient: outpatient || false,
        hospital: hospital || false,
      },
    });

    return plan;
  }
}
