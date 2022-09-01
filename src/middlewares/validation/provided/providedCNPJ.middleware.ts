import { NextFunction, Request, Response } from "express";

export const providedCNPJ = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { cnpj } = request.body;
  // checks if a cnpj was provided
  if (!cnpj) {
    response.status(400);
    throw new Error("CNPJ não provido!");
  }

  return next();
};
