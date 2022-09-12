import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const validValueAgreementEdit = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { id_agreement } = request.params;

  const agreement = await prisma.agreement.findUnique({
    where: { id: id_agreement },
    include: { valueAgreement: true },
  });

  if (!agreement?.valueAgreement) {
    response.status(400);
    throw new Error("Acordo não possui um valor cadastrado!");
  }

  return next();
};
