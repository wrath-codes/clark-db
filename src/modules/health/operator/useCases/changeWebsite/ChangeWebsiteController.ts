import { Request, Response } from "express";

import { ChangeWebsiteOperatorUseCase } from "./ChangeWebsiteUseCase";

export class ChangeWebsiteOperatorController {
  async handle(request: Request, response: Response) {
    const { id_operator } = request.params;
    const { website } = request.body;

    const changeWebsiteOperatorUseCase = new ChangeWebsiteOperatorUseCase();

    const operator = await changeWebsiteOperatorUseCase.execute({
      id_operator,
      website,
    });

    return response.status(200).json(operator);
  }
}
