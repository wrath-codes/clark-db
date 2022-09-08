import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const contractExistsNumber = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { number } = request.body;

  // check if contract with same number already exists
  const contractExists = await prisma.contract.findFirst({
    where: { number },
  });
  if (contractExists) {
    response.status(400);
    throw new Error("Um contrato com este número já existe!");
  }

  return next();
};
