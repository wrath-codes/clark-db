import { Request, Response } from "express";

import { SetValuesAgreementToNullUseCase } from "./SetValuesAgreementToNullUseCase";

export class SetValuesAgreementToNullController {
  async handle(request: Request, response: Response) {
    const { id_agreement } = request.params;

    const setValuesAgreementToNullUseCase = new SetValuesAgreementToNullUseCase();

    const agreement = await setValuesAgreementToNullUseCase.execute(id_agreement);

    return response.status(200).json(agreement);
  }
}
