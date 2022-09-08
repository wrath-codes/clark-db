import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const validContractStatusValido = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { id_contract } = request.params;
  const contract = await prisma.contract.findFirst({
    where: { id: id_contract },
  });
  if (contract?.status !== "VALIDO") {
    response.status(400);
    throw new Error("Este contrato não está com status de VALIDO!");
  }
  return next();
};
