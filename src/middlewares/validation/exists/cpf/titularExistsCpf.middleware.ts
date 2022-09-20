import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const titularExistsCpf = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { cpfTitular } = request.body;

  if (!cpfTitular) {
    return next();
  }

  const titularWithCpfTitular = await prisma.titular.findUnique({
    where: { cpf: cpfTitular },
  });

  if (!titularWithCpfTitular && cpfTitular) {
    response.status(404);
    throw new Error("Titular não encontrado!");
  }

  return next();
};
