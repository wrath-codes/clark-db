import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const validBeneficiaryAlreadyTitular = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { id_beneficiary } = request.params;

  const beneficiary = await prisma.beneficiary.findUnique({
    where: { id: id_beneficiary },
    include: { planCard: true },
  });

  if (beneficiary?.planCard?.kind === "TITULAR") {
    response.status(400);
    throw new Error("Beneficiário já é titular");
  }

  return next();
};
