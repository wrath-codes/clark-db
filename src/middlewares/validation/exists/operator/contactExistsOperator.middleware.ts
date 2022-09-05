import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const contactExistsOperator = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { id_operator } = request.params;

  const operator = await prisma.operator.findUnique({
    where: { id: id_operator },
    include: { contact: true },
  });

  if (operator?.contact) {
    response.status(400);
    throw new Error("O Contato da operadora já existe!");
  }

  return next();
};
