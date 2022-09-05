import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const contactExistsEmployer = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { id_employer } = request.params;

  const employer = await prisma.employer.findUnique({
    where: { id: id_employer },
    include: { contact: true },
  });

  if (employer?.contact) {
    response.status(400);
    throw new Error("O Contato da operadora já existe!");
  }

  return next();
};
