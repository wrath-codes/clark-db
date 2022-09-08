import { Request, Response } from "express";

import { FindInvalidContractsEmployerUseCase } from "./FindInvalidContractsEmployerUseCase";

export class FindInvalidContractsEmployerController {
  async handle(request: Request, response: Response) {
    const { id_employer } = request.params;

    const findInvalidContractsEmployerUseCase =
      new FindInvalidContractsEmployerUseCase();

    const contracts = await findInvalidContractsEmployerUseCase.execute(
      id_employer,
    );

    return response.json(contracts);
  }
}
