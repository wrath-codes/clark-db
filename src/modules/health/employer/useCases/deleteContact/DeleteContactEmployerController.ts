import { Request, Response } from "express";

import { DeleteContactEmployerUseCase } from "./DeleteContactEmployerUseCase";

export class DeleteContactEmployerController {
  async handle(request: Request, response: Response) {
    const { id_employer } = request.params;

    const deleteContactEmployerUseCase = new DeleteContactEmployerUseCase();

    const employer = await deleteContactEmployerUseCase.execute(id_employer);

    return response.status(200).json(employer);
  }
}
