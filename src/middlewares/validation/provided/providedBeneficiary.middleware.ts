import { NextFunction, Request, Response } from "express";

export const providedBeneficiary = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const {
    firstName,
    lastName,
    cpf,
    dateOfBirth,
    sex,
    maritalStatus,
    email,
    phone,
    planCardNumber,
    kind,
  } = request.body;

  if (!firstName) {
    response.status(400);
    throw new Error("Primeiro nome não provido!");
  }
  if (!lastName) {
    response.status(400);
    throw new Error("Último nome não provido!");
  }
  if (!cpf) {
    response.status(400);
    throw new Error("CPF não provido!");
  }
  if (!dateOfBirth) {
    response.status(400);
    throw new Error("Data de nascimento não provida!");
  }
  if (!sex) {
    response.status(400);
    throw new Error("Sexo não provido!");
  }
  if (!maritalStatus) {
    response.status(400);
    throw new Error("Estado Civil não provido!");
  }
  if (!email) {
    response.status(400);
    throw new Error("Email não provido!");
  }
  if (!phone) {
    response.status(400);
    throw new Error("Telefone não provido!");
  }
  if (!planCardNumber) {
    response.status(400);
    throw new Error("Número do cartão do plano não provido!");
  }
  if (!kind) {
    response.status(400);
    throw new Error("Tipo de beneficiário não provido!");
  }

  return next();
};
