import { Request, Response } from "express";

import { DeleteBrokerUseCase } from "./DeleteBrokerUseCase";

export class DeleteBrokerController {
  async handle(request: Request, response: Response) {
    const { id_broker } = request.params;

    const deleteBrokerUseCase = new DeleteBrokerUseCase();

    await deleteBrokerUseCase.execute(id_broker);

    return response.status(200).json({
      message: "Corretora deletada com sucesso!",
    });
  }
}
