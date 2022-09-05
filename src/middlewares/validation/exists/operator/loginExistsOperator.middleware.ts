import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const loginExistsOperator = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { id_operator } = request.params;

  const operator = await prisma.operator.findUnique({
    where: { id: id_operator },
    include: { login: true },
  });

  if (operator?.login) {
    response.status(400);
    throw new Error("O Login da operadora já existe!");
  }

  return next();
};
