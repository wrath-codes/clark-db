import { Request, Response } from "express";

import { AssignBrokerUseCase } from "./AssignBrokerUseCase";

export class AssignBrokerController {
  async handle(request: Request, response: Response) {
    const { id_employer, id_broker } = request.params;

    const assignBrokerUseCase = new AssignBrokerUseCase();

    const employerWithBroker = await assignBrokerUseCase.execute(
      id_employer,
      id_broker,
    );

    return response.status(200).json(employerWithBroker);
  }
}
