import { Request, Response } from "express";

import { AddContactOperatorUseCase } from "./AddContactOperatorUseCase";

export class AddContactOperatorController {
  async handle(request: Request, response: Response) {
    const { id_operator } = request.params;
    const { firstName, lastName, email, phone } = request.body;

    const addContactOperatorUseCase = new AddContactOperatorUseCase();
    const operatorWithContact = await addContactOperatorUseCase.execute({
      id_operator,
      firstName,
      lastName,
      email,
      phone,
    });

    return response.status(201).json(operatorWithContact);
  }
}
