import { Request, Response } from "express";

import { DeleteContactOperatorUseCase } from "./DeleteContactOperatorUseCase";

export class DeleteContactOperatorController {
  async handle(request: Request, response: Response) {
    const { id_operator } = request.params;

    const deleteContactOperatorUseCase = new DeleteContactOperatorUseCase();

    const operator = await deleteContactOperatorUseCase.execute(id_operator);

    return response.status(200).json(operator);
  }
}
