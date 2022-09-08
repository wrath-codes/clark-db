import { Request, Response } from "express";

import { FindValidContractsEmployerUseCase } from "./FindValidContractsEmployerUseCase";

export class FindValidContractEmployerController {
  async handle(request: Request, response: Response) {
    const { id_employer } = request.params;

    const findValidContractsEmployerUseCase =
      new FindValidContractsEmployerUseCase();

    const contracts = await findValidContractsEmployerUseCase.execute(
      id_employer,
    );

    return response.json(contracts);
  }
}
