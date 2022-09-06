import { Request, Response } from "express";

import { FindPlansOperatorUseCase } from "./FindPlansOperatorUseCase";

export class FindPlansOperatorController {
  async handle(request: Request, response: Response) {
    const { id_operator } = request.params;

    const findPlansOperatorUseCase = new FindPlansOperatorUseCase();

    const plans = await findPlansOperatorUseCase.execute(id_operator);

    return response.json(plans);
  }
}
