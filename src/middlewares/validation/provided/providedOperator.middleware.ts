import { NextFunction, Request, Response } from "express";

export const providedOperator = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { website, cnpj } = request.body;
  // checks if a website was provided
  if (!website) {
    throw new Error("Website is not provided!");
  }
  // checks if a cnpj was provided
  if (!cnpj) {
    response.status(400);
    throw new Error("CNPJ is not provided!");
  }

  return next();
};
