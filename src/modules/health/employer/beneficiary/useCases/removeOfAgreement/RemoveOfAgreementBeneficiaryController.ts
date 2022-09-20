import { Request, Response } from "express";

import { RemoveOfAgreementBeneficiaryUseCase } from "./RemoveOfAgreementBeneficiaryUseCase";

export class RemoveOfAgreementBeneficiaryController {
  async handle(request: Request, response: Response) {
    const { id_beneficiary } = request.params;

    const removeOfAgreementBeneficiaryUseCase = new RemoveOfAgreementBeneficiaryUseCase();

    const beneficiary = await removeOfAgreementBeneficiaryUseCase.execute(id_beneficiary);

    return response.status(200).json(beneficiary);
  }
}
