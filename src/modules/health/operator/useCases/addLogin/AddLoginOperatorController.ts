import { Request, Response } from "express";

import { AddLoginOperatorUseCase } from "./AddLoginOperatorUseCase";

export class AddLoginOperatorController {
  async handle(request: Request, response: Response) {
    const { id_operator } = request.params;
    const { username, password } = request.body;

    const addLoginOperatorUseCase = new AddLoginOperatorUseCase();

    const operatorWithLogin = await addLoginOperatorUseCase.execute({
      id_operator,
      username,
      password,
    });

    return response.status(201).json(operatorWithLogin);
  }
}
