import { Request, Response } from "express";

import { FindEmployerUseCase } from "./FindEmployerUseCase";

export class FindEmployerController {
  async handle(request: Request, response: Response) {
    const { id_employer } = request.params;

    const findEmployerUseCase = new FindEmployerUseCase();
    const employer = await findEmployerUseCase.execute(id_employer);

    return response.json(employer);
  }
}
