import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const validAgreementPlanOfOperator = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { id_plan, id_contract } = request.params;

  const contract = await prisma.contract.findFirst({
    where: { id: id_contract },
    include: { operator: true },
  });

  const plan = await prisma.plan.findFirst({
    where: { id: id_plan },
    include: { operator: true },
  });

  if (contract?.operator.id !== plan?.operator.id) {
    response.status(400);
    throw new Error("Plano não pertence ao operador do contrato");
  }

  return next();
};
