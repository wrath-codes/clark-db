import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const agreementExistsId = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { id_agreement } = request.params;

  const agreement = await prisma.agreement.findUnique({
    where: { id: id_agreement },
  });

  if (!agreement) {
    response.status(404);
    throw new Error("Acordo não encontrado!");
  }

  return next();
};
