import { Request, Response } from "express";

import { DeleteLoginOperatorUseCase } from "./DeleteLoginOperatorUseCase";

export class DeleteLoginOperatorController {
  async handle(request: Request, response: Response) {
    const { id_operator } = request.params;

    const deleteLoginOperatorUseCase = new DeleteLoginOperatorUseCase();

    const operatorWithoutLogin = await deleteLoginOperatorUseCase.execute(
      id_operator,
    );

    return response.status(200).json(operatorWithoutLogin);
  }
}
