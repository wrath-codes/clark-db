import { Request, Response } from "express";

import { FindAgreementsContractUseCase } from "./FindAgreementsContractUseCase";

export class FindAgreementsContractController {
  async handle(request: Request, response: Response) {
    const { id_contract } = request.params;

    const findAgreementsContractUseCase = new FindAgreementsContractUseCase();

    const agreements = await findAgreementsContractUseCase.execute(id_contract);

    return response.json(agreements);
  }
}
