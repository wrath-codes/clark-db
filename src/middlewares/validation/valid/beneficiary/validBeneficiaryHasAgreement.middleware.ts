import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const validBeneficiaryHasAgreement = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { id_beneficiary } = request.params;

  const beneficiary = await prisma.beneficiary.findUnique({
    where: { id: id_beneficiary },
    include: { agreement: true },
  });

  if (!beneficiary?.agreement) {
    response.status(400);
    throw new Error("Beneficiário não está vinculado a nenhum convênio!");
  }

  return next();
};
