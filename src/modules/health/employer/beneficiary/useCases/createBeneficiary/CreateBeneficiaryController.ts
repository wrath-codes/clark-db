import { Request, Response } from "express";

import { CreateBeneficiaryUseCase } from "./CreateBeneficiaryUseCase";

export class CreateBeneficiaryController {
  async handle(request: Request, response: Response) {
    const {
      firstName,
      lastName,
      cpf,
      dateOfBirth,
      email,
      phone,
      sex,
      maritalStatus,
      planCardNumber,
      kind,
      cpfTitular,
    } = request.body;

    const { id_employer } = request.params;

    const createBeneficiaryUseCase = new CreateBeneficiaryUseCase();

    const beneficiary = await createBeneficiaryUseCase.execute({
      firstName,
      lastName,
      cpf,
      dateOfBirth,
      email,
      phone,
      sex,
      maritalStatus,
      planCardNumber,
      kind,
      cpfTitular,
      id_employer,
    });
    return response.status(201).json(beneficiary);
  }
}
