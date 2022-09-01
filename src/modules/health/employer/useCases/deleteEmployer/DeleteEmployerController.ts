import { Request, Response } from "express";

import { DeleteEmployerUseCase } from "./DeleteEmployerUseCase";

export class DeleteEmployerController {
  async handle(request: Request, response: Response) {
    const { id_employer } = request.params;

    const deleteEmployerUseCase = new DeleteEmployerUseCase();

    await deleteEmployerUseCase.execute(id_employer);

    return response.status(200).json({
      message: "Cliente deletado com sucesso!",
    });
  }
}
