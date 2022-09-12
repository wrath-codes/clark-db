import { Request, Response } from "express";

import { EditValueAgreementUseCase } from "./EditValueAgreementUseCase";

export class EditValueAgreementController {
  async handle(request: Request, response: Response) {
    const { id_agreement } = request.params;
    const { value } = request.body;

    const editValueAgreementUseCase = new EditValueAgreementUseCase();

    const agreement = await editValueAgreementUseCase.execute({
      id_agreement,
      value,
    });

    return response.status(200).json(agreement);
  }
}
