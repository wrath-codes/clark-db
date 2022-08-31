import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const operatorExistsCNPJ = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { cnpj } = request.body;

  // check if operator with same cnpj already exists
  const operatorExists = await prisma.operator.findFirst({
    where: { cnpj },
  });
  if (operatorExists) {
    response.status(400);
    throw new Error("Operadora já existe!");
  }

  return next();
};
