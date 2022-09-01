import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const brokerExistsName = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { name } = request.body;

  // check if broker with same name already exists
  const brokerExists = await prisma.broker.findFirst({
    where: { name },
  });
  if (brokerExists) {
    response.status(400);
    throw new Error("Uma Corretora com este nome já existe!");
  }

  return next();
};
