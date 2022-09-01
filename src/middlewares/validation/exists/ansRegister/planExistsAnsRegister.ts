import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const planExistsAnsRegister = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { ans_register } = request.body;

  // check if plan with same ans_register already exists
  const planExists = await prisma.plan.findFirst({
    where: { ansRegister: ans_register },
  });
  if (planExists) {
    throw new Error("Um Cliente com este Registro ANS já existe!");
  }

  return next();
};
