import { Request, Response } from "express";

import { AddValueAgreementUseCase } from "./AddValueAgreementUseCase";

export class AddValueAgreementController {
  async handle(request: Request, response: Response) {
    const { id_agreement } = request.params;
    const { value } = request.body;

    const addValueAgreementUseCase = new AddValueAgreementUseCase();

    const agreement = await addValueAgreementUseCase.execute({
      id_agreement,
      value,
    });

    return response.status(201).json(agreement);
  }
}
