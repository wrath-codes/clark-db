import { Request, Response } from "express";

import { GetEmployerOutsideUseCase } from "./GetEmployerOutsideUseCase";

export class GetEmployerOustideController {
  async handle(request: Request, response: Response) {
    const { cnpj_info, latitude, longitude } = request;

    const getEmployerOutsideUseCase = new GetEmployerOutsideUseCase();

    const employer = await getEmployerOutsideUseCase.execute({
      cnpj_info,
      latitude,
      longitude,
    });

    return response.status(200).json(employer);
  }
}
