import { Request, Response } from "express";

import { AddContactEmployerUseCase } from "./AddContactEmployerUseCase";

export class AddContactEmployerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_employer } = request.params;
    const { firstName, lastName, email, phone } = request.body;

    const addContactEmployerUseCase = new AddContactEmployerUseCase();

    const employerWithContact = await addContactEmployerUseCase.execute({
      id_employer,
      firstName,
      lastName,
      email,
      phone,
    });

    return response.status(201).json(employerWithContact);
  }
}
