import { NextFunction, Request, Response } from "express";

export const validValueAgreementProvided = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { value } = request.body;

  if (!value) {
    response.status(400);
    throw new Error("Informe o valor do plano!");
  }

  return next();
};
