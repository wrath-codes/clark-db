import { NextFunction, Request, Response } from "express";

export const providedContract = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { number } = request.body;

  if (!number) {
    response.status(400);
    throw new Error("Número do contrato não informado!");
  }

  return next();
};
