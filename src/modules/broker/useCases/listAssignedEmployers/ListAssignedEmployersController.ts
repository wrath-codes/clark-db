import { Request, Response } from "express";

import { ListAssignedEmployersUseCase } from "./ListAssignedEmployersUseCase";

export class ListAssignedEmployersController {
  async handle(request: Request, response: Response) {
    const { id_broker } = request.params;

    const listAssignedEmployerUseCase = new ListAssignedEmployersUseCase();

    const assignedEmployers = await listAssignedEmployerUseCase.execute(
      id_broker,
    );

    return response.json(assignedEmployers);
  }
}
