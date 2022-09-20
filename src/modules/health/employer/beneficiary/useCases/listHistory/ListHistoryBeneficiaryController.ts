import { Request, Response } from "express";

import { ListHistoryBeneficiaryUseCase } from "./ListHistoryBeneficiaryUseCase";

export class ListHistoryBeneficiaryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_beneficiary } = request.params;

    const listHistoryBeneficiaryUseCase = new ListHistoryBeneficiaryUseCase();

    const beneficiary = await listHistoryBeneficiaryUseCase.execute(id_beneficiary);

    return response.status(200).json(beneficiary);
  }
}
