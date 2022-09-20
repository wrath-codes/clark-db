import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const beneficiaryExistsCpf = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { cpf } = request.body;

  const beneficiaryWithCpf = await prisma.beneficiary.findUnique({
    where: { cpf },
  });

  if (beneficiaryWithCpf) {
    response.status(400);
    throw new Error("Beneficiário já cadastrado!");
  }

  return next();
};
