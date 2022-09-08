import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const validContractStatusNotCancelado = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { id_contract } = request.params;
  const contract = await prisma.contract.findFirst({
    where: { id: id_contract },
  });
  if (contract?.status !== "CANCELADO") {
    return next();
  } else {
    response.status(400);
    throw new Error("Este contrato está com status de CANCELADO!");
  }
};
