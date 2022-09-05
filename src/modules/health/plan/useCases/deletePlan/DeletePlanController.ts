import { Request, Response } from "express";

import { DeletePlanUseCase } from "./DeletePlanUseCase";

export class DeletePlanController {
  async handle(request: Request, response: Response) {
    const { id_plan } = request.params;

    const deletePlanUseCase = new DeletePlanUseCase();

    await deletePlanUseCase.execute(id_plan);

    return response
      .status(200)
      .json({ message: "Plano deletado com sucesso!" });
  }
}
