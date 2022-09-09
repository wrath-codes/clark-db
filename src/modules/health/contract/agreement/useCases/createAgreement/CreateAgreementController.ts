import { Request, Response } from "express";

import { CreateAgreementUseCase } from "./CreateAgreementUseCase";

export class CreateAgreementController {
  async handle(request: Request, response: Response) {
    const { id_contract, id_plan } = request.params;
    const { description } = request.body;

    const createAgreementUseCase = new CreateAgreementUseCase();

    const agreement = await createAgreementUseCase.execute({
      id_contract,
      id_plan,
      description,
    });

    return response.status(201).json(agreement);
  }
}
