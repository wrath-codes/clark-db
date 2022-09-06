import { Request, Response } from "express";

import { GetOperatorOutsideUseCase } from "./GetOperatorOutsideUseCase";

export class GetOperatorOustideController {
  async handle(request: Request, response: Response) {
    const { cnpj_info, latitude, longitude } = request;

    const getOperatorOutsideUseCase = new GetOperatorOutsideUseCase();

    const operator = await getOperatorOutsideUseCase.execute({
      cnpj_info,
      latitude,
      longitude,
    });

    return response.status(200).json(operator);
  }
}
