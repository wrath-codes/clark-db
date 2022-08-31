import { NextFunction, Request, Response } from "express";

export const regexCNPJ = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { cnpj } = request.body;

  // passes if not provided provided
  if (!cnpj) {
    return next();
  }

  // eslint-disable-next-line no-useless-escape
  if (!/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/.test(cnpj)) {
    response.status(400);
    throw new Error("CNPJ Inválido!");
  }

  return next();
};
