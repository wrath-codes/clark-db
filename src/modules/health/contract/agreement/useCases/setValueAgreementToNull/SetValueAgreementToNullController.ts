import { Request, Response } from "express";

import { SetValueAgreementToNullUseCase } from "./SetValueAgreementToNullUseCase";

export class SetValueAgreementToNullController {
  async handle(request: Request, response: Response) {
    const { id_agreement } = request.params;

    const setValueAgreementToNullUseCase = new SetValueAgreementToNullUseCase();

    const agreement = await setValueAgreementToNullUseCase.execute(id_agreement);

    return response.status(200).json(agreement);
  }
}
