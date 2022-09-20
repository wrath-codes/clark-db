import { Request, Response } from "express";

import { TurnTitularBeneficiaryUseCase } from "./TurnTitularBeneficiaryUseCase";

export class TurnTitularBeneficiaryController {
  async handle(request: Request, response: Response) {
    const { id_beneficiary } = request.params;

    const turnTitularBeneficiaryUseCase = new TurnTitularBeneficiaryUseCase();

    const beneficiary = await turnTitularBeneficiaryUseCase.execute(id_beneficiary);

    return response.status(200).json(beneficiary);
  }
}
