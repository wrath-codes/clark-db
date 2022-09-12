import { NextFunction, Request, Response } from "express";

export const validValueAgreementNegative = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { value } = request.body;

  if (value <= 0) {
    response.status(400);
    throw new Error("O valor do plano não pode ser menor ou igual a zero!");
  }

  return next();
};
