import { Request, Response } from "express";

import { ChangeNameOperatorUseCase } from "./ChangeNameOperatorUseCase";

export class ChangeNameOperatorController {
  async handle(request: Request, response: Response) {
    const { id_operator } = request.params;
    const { name } = request.body;

    const changeNameOperatorUseCase = new ChangeNameOperatorUseCase();

    const operator = await changeNameOperatorUseCase.execute({
      id_operator,
      name,
    });

    return response.json(operator);
  }
}
