import { Request, Response } from "express";

import { FullInfoBeneficiaryUseCase } from "./FullInfoBeneficiaryUseCase";

export class FullInfoBeneficiaryController {
  async handle(request: Request, response: Response) {
    const { id_beneficiary } = request.params;

    const fullInfoBeneficiaryUseCase = new FullInfoBeneficiaryUseCase();

    const beneficiary = await fullInfoBeneficiaryUseCase.execute(id_beneficiary);

    return response.status(200).json(beneficiary);
  }
}
