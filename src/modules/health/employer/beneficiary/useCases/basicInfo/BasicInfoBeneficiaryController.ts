import { Request, Response } from "express";

import { BasicInfoBeneficiaryUseCase } from "./BasicInfoBeneficiaryUseCase";

export class BasicInfoBeneficiaryController {
  async handle(request: Request, response: Response) {
    const { id_beneficiary } = request.params;

    const basicInfoBeneficiaryUseCase = new BasicInfoBeneficiaryUseCase();

    const beneficiary = await basicInfoBeneficiaryUseCase.execute(id_beneficiary);

    return response.status(200).json(beneficiary);
  }
}
