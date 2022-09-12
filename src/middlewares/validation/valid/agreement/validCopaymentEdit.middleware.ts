import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const validCopaymentEdit = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { id_agreement } = request.params;

  const agreement = await prisma.agreement.findFirst({
    where: { id: id_agreement },
    include: { coPayment: true },
  });

  if (!agreement?.coPayment) {
    response.status(400);
    throw new Error("Acordo não possui coparticipação cadastrada!");
  }

  return next();
};
