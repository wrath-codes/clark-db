import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const operatorExistsId = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { id_operator } = request.params;

  // check if operator with same id already exists
  const operatorExists = await prisma.operator.findFirst({
    where: { id: id_operator },
  });
  if (!operatorExists) {
    response.status(404);
    throw new Error("Operadora não existe com este ID!");
  }

  return next();
};
