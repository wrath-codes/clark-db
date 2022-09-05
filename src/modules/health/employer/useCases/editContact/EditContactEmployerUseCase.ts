import { Request, Response } from "express";

import { EditContactEmployerUseCase } from "./EditContactEmployerController";

export class EditContactEmployerController {
  async handle(request: Request, response: Response) {
    const { id_employer } = request.params;
    const { firstName, lastName, email, phone } = request.body;

    const editContactEmployerUseCase = new EditContactEmployerUseCase();

    const employer = await editContactEmployerUseCase.execute({
      id_employer,
      firstName,
      lastName,
      email,
      phone,
    });

    return response.status(200).json(employer);
  }
}
