import { Request, Response } from "express";

import { ChangeNameBrokerUseCase } from "./ChangeNameBrokerUseCase";

export class ChangeNameBrokerController {
  async handle(request: Request, response: Response) {
    const { id_broker } = request.params;
    const { name } = request.body;

    const changeNameBrokerUseCase = new ChangeNameBrokerUseCase();

    const broker = await changeNameBrokerUseCase.execute({
      id_broker,
      name,
    });

    return response.json(broker);
  }
}
