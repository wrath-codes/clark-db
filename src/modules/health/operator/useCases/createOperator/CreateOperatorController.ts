import { Request, Response } from "express";

import { CreateOperatorUseCase } from "./CreateOperatorUseCase";

export class CreateOperatorController {
  async handle(request: Request, response: Response) {
    const { cnpj, website } = request.body;
    const { name } = request.cnpj_info;

    const createOperatorUseCase = new CreateOperatorUseCase();

    const operator = await createOperatorUseCase.execute({
      name,
      cnpj,
      website,
    });

    console.log(request.cnpj_info);
    return response.status(201).json(operator);
  }
}
