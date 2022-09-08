import { Request, Response } from "express";

import { CreateContractUseCase } from "./CreateContractUseCase";

export class CreateContractController {
  async handle(request: Request, response: Response) {
    const { number, startDate, endDate, status, description } = request.body;
    const { id_employer, id_operator } = request.params;

    const createContractUseCase = new CreateContractUseCase();
    const contract = await createContractUseCase.execute({
      number,
      startDate,
      endDate,
      status,
      description,
      id_employer,
      id_operator,
    });

    return response.status(201).json(contract);
  }
}
