import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const planExistsAnsRegister = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { ansRegister } = request.body;

  // check if plan with same ans_register already exists
  const planExists = await prisma.plan.findFirst({
    where: { ansRegister },
  });
  if (planExists) {
    response.status(400);
    throw new Error("Um Plano com este Registro ANS já existe!");
  }

  return next();
};
