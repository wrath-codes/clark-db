import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const planExistsName = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { name } = request.body;

  // check if plan with same name already exists
  const planExists = await prisma.plan.findFirst({
    where: { name },
  });
  if (planExists) {
    response.status(400);
    throw new Error("Um Plano com este Nome já existe!");
  }

  return next();
};
