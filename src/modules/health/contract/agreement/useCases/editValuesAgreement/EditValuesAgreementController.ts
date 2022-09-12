import { Request, Response } from "express";

import { EditValuesAgreementUseCase } from "./EditValuesAgreementUseCase";

export class EditValuesAgreementController {
  async handle(request: Request, response: Response) {
    const { id_agreement } = request.params;
    const { values } = request.body;

    const editValuesAgreementUseCase = new EditValuesAgreementUseCase();

    const agreement = await editValuesAgreementUseCase.execute({
      id_agreement,
      values,
    });

    return response.status(200).json(agreement);
  }
}
