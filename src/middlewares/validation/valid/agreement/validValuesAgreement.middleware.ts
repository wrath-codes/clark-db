import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const validValuesAgreement = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { id_agreement } = request.params;

  const agreement = await prisma.agreement.findUnique({
    where: { id: id_agreement },
    include: { valuesAgreement: true },
  });

  if (agreement?.valuesAgreement) {
    response.status(400);
    throw new Error("Acordo já possui valores cadastrados!");
  }

  return next();
};
