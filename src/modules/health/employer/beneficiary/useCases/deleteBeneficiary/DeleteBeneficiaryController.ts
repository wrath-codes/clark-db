import { Request, Response } from "express";

import { DeleteBeneficiaryUseCase } from "./DeleteBeneficiaryUseCase";

export class DeleteBeneficiaryController {
  async handle(request: Request, response: Response) {
    const { id_beneficiary } = request.params;

    const deleteBeneficiaryUseCase = new DeleteBeneficiaryUseCase();

    await deleteBeneficiaryUseCase.execute(id_beneficiary);

    return response.status(200).json({ message: "Beneficiário deletado com sucesso!" });
  }
}
