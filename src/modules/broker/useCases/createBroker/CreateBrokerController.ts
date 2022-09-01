import { Request, Response } from "express";

import { CreateBrokerUseCase } from "./CreateBrokerUseCase";

export class CreateBrokerController {
  async handle(request: Request, response: Response) {
    const { cnpj } = request.body;
    const { name } = request.cnpj_info;

    const createBrokerUseCase = new CreateBrokerUseCase();

    const broker = await createBrokerUseCase.execute({ cnpj, name });

    return response.status(201).json(broker);
  }
}
