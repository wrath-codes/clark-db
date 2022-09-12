import { Request, Response } from "express";

import { EditCopaymentUseCase } from "./EditCopaymentUseCase";

export class EditCopaymentController {
  async handle(request: Request, response: Response) {
    const { id_agreement } = request.params;
    const { percentage, examValue, consultationValue, admissionValue, description } = request.body;

    const editCopaymentUseCase = new EditCopaymentUseCase();

    const agreement = await editCopaymentUseCase.execute({
      id_agreement,
      percentage,
      examValue,
      consultationValue,
      admissionValue,
      description,
    });

    return response.status(200).json(agreement);
  }
}
