import { Request, Response } from "express";

import { CreateOperatorUseCase } from "./CreateOperatorUseCase";

export class CreateOperatorController {
  async handle(request: Request, response: Response) {
    const { cnpj, website } = request.body;
    const { name, address } = request.cnpj_info;
    const { latitude, longitude } = request;

    const createOperatorUseCase = new CreateOperatorUseCase();

    const operator = await createOperatorUseCase.execute({
      name,
      cnpj,
      website,
      street: address.street,
      number: Number(address.number),
      complement: String(address.complement),
      district: address.district,
      city: address.city,
      state: address.state,
      zipCode: address.zipCode,
      latitude,
      longitude,
    });

    return response.status(201).json(operator);
  }
}
