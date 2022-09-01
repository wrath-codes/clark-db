import { Request, Response } from "express";

import { ChangeNameEmployerUseCase } from "./ChangeNameEmployerUseCase";

export class ChangeNameEmployerController {
  async handle(request: Request, response: Response) {
    const { id_employer } = request.params;
    const { name } = request.body;

    const changeNameEmployerUseCase = new ChangeNameEmployerUseCase();

    const employer = await changeNameEmployerUseCase.execute({
      id_employer,
      name,
    });

    return response.json(employer);
  }
}
