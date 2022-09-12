import { Request, Response } from "express";

import { AddValuesAgreementUseCase } from "./AddValuesAgreementUseCase";

export class AddValuesAgreementController {
  async handle(request: Request, response: Response) {
    const { id_agreement } = request.params;
    const { values } = request.body;

    const addValuesAgreementUseCase = new AddValuesAgreementUseCase();

    const agreement = await addValuesAgreementUseCase.execute({
      id_agreement,
      values,
    });

    return response.status(201).json(agreement);
  }
}
