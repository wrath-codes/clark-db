import { Request, Response } from "express";

import { CreatePlanUseCase } from "./CreatePlanUseCase";

export class CreatePlanController {
  async handle(request: Request, response: Response) {
    const { id_operator } = request.params;
    const { name, reach, ansRegister, obstetric, outpatient, hospital } =
      request.body;

    const createPlanUseCase = new CreatePlanUseCase();

    const plan = await createPlanUseCase.execute({
      id_operator,
      name,
      reach,
      ansRegister,
      obstetric,
      outpatient,
      hospital,
    });

    return response.status(201).json(plan);
  }
}
