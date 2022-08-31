import { Request, Response } from "express";

import { ChangeNameUseCase } from "./ChangeNameUseCase";

export class ChangeNameController {
  async handle(request: Request, response: Response) {
    const { id_operator } = request.params;
    const { name } = request.body;

    const changeNameUseCase = new ChangeNameUseCase();

    const operator = await changeNameUseCase.execute({
      id_operator,
      name,
    });

    return response.json(operator);
  }
}
