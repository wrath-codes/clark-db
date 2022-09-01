import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const brokerExistsCNPJ = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { cnpj } = request.body;

  // check if broker with same cnpj already exists
  const brokerExists = await prisma.broker.findFirst({
    where: { cnpj },
  });
  if (brokerExists) {
    response.status(400);
    throw new Error("Uma Corretora com este CNPJ já existe!");
  }

  return next();
};
