import { Request, Response } from "express";

import { FindAllBrokersUseCase } from "./FindAllBrokersUseCase";

export class FindAllBrokersController {
  async handle(request: Request, response: Response) {
    const findAllBrokersUseCase = new FindAllBrokersUseCase();

    const brokers = await findAllBrokersUseCase.execute();

    return response.status(200).json(brokers);
  }
}
