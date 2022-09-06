import { Request, Response } from "express";

import { FindPlanUseCase } from "./FindPlanUseCase";

export class FindPlanController {
  async handle(request: Request, response: Response) {
    const { id_plan } = request.params;

    const findPlanUseCase = new FindPlanUseCase();

    const plan = await findPlanUseCase.execute(id_plan);

    return response.status(200).json(plan);
  }
}
