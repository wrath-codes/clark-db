import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const validBeneficiaryHasEmployer = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { id_beneficiary } = request.params;

  const beneficiary = await prisma.beneficiary.findUnique({
    where: { id: id_beneficiary },
    include: { employer: true },
  });

  if (!beneficiary?.employer) {
    response.status(400);
    throw new Error("Beneficiario não possui um empregador!");
  }

  return next();
};
