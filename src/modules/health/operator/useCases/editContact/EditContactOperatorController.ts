import { Request, Response } from "express";

import { EditContactOperatorUseCase } from "./EditContactOperatorUseCase";

export class EditContactOperatorController {
  async handle(request: Request, response: Response) {
    const { id_operator } = request.params;
    const { firstName, lastName, email, phone } = request.body;

    const editContactOperatorUseCase = new EditContactOperatorUseCase();

    const operator = await editContactOperatorUseCase.execute({
      id_operator,
      firstName,
      lastName,
      email,
      phone,
    });

    return response.status(200).json(operator);
  }
}
