import { Request, Response } from "express";

import { ChangeFamilyBeneficiary } from "./ChangeFamilyBeneficiaryUseCase";

export class ChangeFamilyBeneficiaryController {
  async handle(request: Request, response: Response) {
    const { id_beneficiary } = request.params;
    const { cpfTitular } = request.body;

    const changeFamilyBeneficiary = new ChangeFamilyBeneficiary();

    const beneficiary = await changeFamilyBeneficiary.execute({
      id_beneficiary,
      cpfTitular,
    });

    return response.status(200).json(beneficiary);
  }
}
