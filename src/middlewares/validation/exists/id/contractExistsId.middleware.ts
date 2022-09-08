import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const contractExistsId = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { id_contract } = request.params;

  // check if contract exists
  const contractExists = await prisma.contract.findFirst({
    where: { id: id_contract },
  });
  if (!contractExists) {
    response.status(400);
    throw new Error("Este contrato não existe!");
  }

  return next();
};
