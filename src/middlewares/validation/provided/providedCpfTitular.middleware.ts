import { NextFunction, Request, Response } from "express";

export const providedCpfTitular = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { cpfTitular, kind } = request.body;

  if (kind !== "TITULAR" && !cpfTitular) {
    response.status(400);
    throw new Error("CPF do titular não informado");
  }

  return next();
};
