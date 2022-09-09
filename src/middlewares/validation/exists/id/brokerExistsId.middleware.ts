import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const brokerExistsId = async (request: Request, response: Response, next: NextFunction) => {
  const { id_broker } = request.params;

  // check if broker with same id already exists
  const brokerExists = await prisma.broker.findFirst({
    where: { id: id_broker },
  });
  if (!brokerExists) {
    response.status(404);
    throw new Error("Corretora não existe com este ID!");
  }

  return next();
};
