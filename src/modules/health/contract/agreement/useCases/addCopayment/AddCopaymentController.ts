import { Request, Response } from "express";

import { AddCopaymentUseCase } from "./AddCopaymentUseCase";

export class AddCopaymentController {
  async handle(request: Request, response: Response) {
    const { id_agreement } = request.params;
    const { description, percentage, examValue, consultationValue, admissionValue } = request.body;

    const addCopaymentUseCase = new AddCopaymentUseCase();

    const agreementWithCopayment = await addCopaymentUseCase.execute({
      id_agreement,
      description,
      percentage,
      examValue,
      consultationValue,
      admissionValue,
    });

    return response.status(201).json(agreementWithCopayment);
  }
}
