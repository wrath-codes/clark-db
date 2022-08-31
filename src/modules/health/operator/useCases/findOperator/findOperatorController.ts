import { Request, Response } from "express";

import { FindOperatorUseCase } from "./FindOperatorUseCase";

export class FindOperatorController {
  async handle(request: Request, response: Response) {
    const { id_operator } = request.params;

    const findOperatorUseCase = new FindOperatorUseCase();
    const operator = await findOperatorUseCase.execute(id_operator);

    return response.json(operator);
  }
}
