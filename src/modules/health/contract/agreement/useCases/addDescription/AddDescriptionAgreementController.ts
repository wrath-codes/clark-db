import { Request, Response } from "express";

import { AddDescriptionAgreementUseCase } from "./AddDescriptionAgreementUseCase";

export class AddDescriptionAgreementController {
  async handle(request: Request, response: Response) {
    const { id_agreement } = request.params;
    const { description } = request.body;

    const addDescriptionAgreementUseCase = new AddDescriptionAgreementUseCase();

    const agreement = await addDescriptionAgreementUseCase.execute({
      id_agreement,
      description,
    });

    return response.status(200).json(agreement);
  }
}
