import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const validAgreementPlanHasAgreement = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { id_plan, id_contract } = request.params;

  const agreement = await prisma.agreement.findFirst({
    where: {
      planId: id_plan,
      contractId: id_contract,
    },
  });

  if (agreement) {
    response.status(400);
    throw new Error("Este plano já possui um acordo neste contrato!");
  }

  return next();
};
