import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const operatorExistsName = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { name } = request.body;

  // check if operator with same name already exists
  const operatorExists = await prisma.operator.findFirst({
    where: { name },
  });
  if (operatorExists) {
    response.status(400);
    throw new Error("Operadora já existe!");
  }

  return next();
};
