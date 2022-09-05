import { NextFunction, Request, Response } from "express";
export const providedContact = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { firstName, lastName, email, phone } = request.body;

  if (!firstName) {
    throw new Error("Primeiro Nome não provido!");
  }
  if (!lastName) {
    throw new Error("Segundo Nome não provido!");
  }
  if (!email) {
    throw new Error("Email não provido!");
  }
  if (!phone) {
    throw new Error("Telefone não provido!");
  }

  return next();
};
