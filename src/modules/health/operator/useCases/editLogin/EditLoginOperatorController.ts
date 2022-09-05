import { Request, Response } from "express";

import { EditLoginOperatorUseCase } from "./EditLoginOperatorUseCase";

export class EditLoginOperatorController {
  async handle(request: Request, response: Response) {
    const { id_operator } = request.params;
    const { username, password } = request.body;

    const editLoginOperatorUseCase = new EditLoginOperatorUseCase();

    const operator = await editLoginOperatorUseCase.execute({
      id_operator,
      username,
      password,
    });

    return response.status(200).json(operator);
  }
}
