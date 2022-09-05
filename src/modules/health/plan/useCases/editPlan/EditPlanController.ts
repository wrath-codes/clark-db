import { Request, Response } from "express";

import { EditPlanUseCase } from "./EditPlanUseCase";

export class EditPlanController {
  async handle(request: Request, response: Response) {
    const { id_plan } = request.params;
    const { name, reach, ansRegister, obstetric, outpatient, hospital } =
      request.body;

    const editPlanUseCase = new EditPlanUseCase();

    const plan = await editPlanUseCase.execute({
      id_plan,
      name,
      reach,
      ansRegister,
      obstetric,
      outpatient,
      hospital,
    });

    return response.status(200).json(plan);
  }
}
