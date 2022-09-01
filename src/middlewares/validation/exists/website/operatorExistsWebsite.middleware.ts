import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const operatorExistsWebsite = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { website } = request.body;

  // check if operator with same website already exists
  const operatorExists = await prisma.operator.findFirst({
    where: { website },
  });
  if (operatorExists) {
    response.status(400);
    throw new Error("Uma Operadora com este website já existe!");
  }

  return next();
};
