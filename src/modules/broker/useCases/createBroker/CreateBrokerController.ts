import { Request, Response } from "express";

import { CreateBrokerUseCase } from "./CreateBrokerUseCase";

export class CreateBrokerController {
  async handle(request: Request, response: Response) {
    const { cnpj } = request.body;
    const { name, address } = request.cnpj_info;

    const createBrokerUseCase = new CreateBrokerUseCase();

    const broker = await createBrokerUseCase.execute({
      cnpj,
      name,
      street: address.street,
      number: Number(address.number),
      complement: String(address.complement),
      district: address.district,
      city: address.city,
      state: address.state,
      zipCode: address.zipCode,
    });

    return response.status(201).json(broker);
  }
}
