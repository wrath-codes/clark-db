import { Request, Response } from "express";

import { CreateEmployerUseCase } from "./CreateEmployerUseCase";

export class CreateEmployerController {
  async handle(request: Request, response: Response) {
    const { cnpj } = request.body;
    const { name } = request.cnpj_info;

    const createEmployerUseCase = new CreateEmployerUseCase();

    const employer = await createEmployerUseCase.execute({ cnpj, name });

    return response.status(201).json(employer);
  }
}
