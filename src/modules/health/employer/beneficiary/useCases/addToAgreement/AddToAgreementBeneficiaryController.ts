import { Request, Response } from "express";

import { AddToAgreementBeneficiaryUseCase } from "./AddToAgreementBeneficiaryUseCase";

export class AddToAgreementBeneficiaryController {
  async handle(request: Request, response: Response) {
    const { id_agreement, id_beneficiary } = request.params;

    const addToAgreementBeneficiaryUseCase = new AddToAgreementBeneficiaryUseCase();

    const beneficiary = await addToAgreementBeneficiaryUseCase.execute({
      id_agreement,
      id_beneficiary,
    });

    return response.status(200).json(beneficiary);
  }
}
