import { Request, Response } from "express";

import { FireBeneficiaryUseCase } from "./FireBeneficiaryUseCase";

export class FireBeneficiaryController {
  async handle(request: Request, response: Response) {
    const { id_beneficiary } = request.params;

    const fireBeneficiaryUseCase = new FireBeneficiaryUseCase();

    const beneficiary = await fireBeneficiaryUseCase.execute(id_beneficiary);

    return response.status(200).json(beneficiary);
  }
}
