import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const beneficiaryExistsId = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { id_beneficiary } = request.params;

  const beneficiary = await prisma.beneficiary.findFirst({
    where: { id: id_beneficiary },
  });

  if (!beneficiary) {
    response.status(404);
    throw new Error("Beneficiário não encontrado!");
  }

  return next();
};
