import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const employerExistsCNPJ = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { cnpj } = request.body;

  // check if employer with same cnpj already exists
  const employerExists = await prisma.employer.findFirst({
    where: { cnpj },
  });
  if (employerExists) {
    response.status(400);
    throw new Error("Um Cliente com este CNPJ já existe!");
  }

  return next();
};
