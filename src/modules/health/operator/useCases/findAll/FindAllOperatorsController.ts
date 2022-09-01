import { Request, Response } from "express";

import { FindAllOperatorsUseCase } from "./FindAllOperatorsUseCase";

export class FindAllOperatorsController {
  async handle(request: Request, response: Response) {
    const findAllOperatorsUseCase = new FindAllOperatorsUseCase();

    const operators = await findAllOperatorsUseCase.execute();

    return response.status(200).json(operators);
  }
}
