import { Request, Response } from "express";

import { CreateEmployerUseCase } from "./CreateEmployerUseCase";

export class CreateEmployerController {
  async handle(request: Request, response: Response) {
    const { cnpj } = request.body;
    const { name, address } = request.cnpj_info;
    const { latitude, longitude } = request;

    const createEmployerUseCase = new CreateEmployerUseCase();

    const employer = await createEmployerUseCase.execute({
      cnpj,
      name,
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

    return response.status(201).json(employer);
  }
}
