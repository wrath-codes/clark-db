import { prisma } from "@database/prismaClient";
import { Reach } from "@prisma/client";

import { slugifyName } from "@utils/format/slugifyName.util";

interface IEditPlan {
  id_plan: string;
  name: string;
  reach: Reach;
  ansRegister: string;
  obstetric?: boolean;
  outpatient?: boolean;
  hospital?: boolean;
}

export class EditPlanUseCase {
  async execute({
    id_plan,
    name,
    reach,
    ansRegister,
    obstetric,
    outpatient,
    hospital,
  }: IEditPlan) {
    const plan = await prisma.plan.update({
      where: {
        id: id_plan,
      },
      data: {
        name,
        reach,
        slug: name && (await slugifyName(name)),
        ansRegister,
        obstetric,
        outpatient,
        hospital,
      },
    });

    return plan;
  }
}
