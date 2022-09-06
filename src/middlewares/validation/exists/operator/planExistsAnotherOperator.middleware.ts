import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const planExistsAnotherOperator = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { id_plan, id_operator } = request.params;

  const plan = await prisma.plan.findUnique({
    where: { id: id_plan },
  });

  if (plan?.operatorId !== id_operator) {
    response.status(400);
    throw new Error("Plano não pertence a esse operador");
  }

  return next();
};
