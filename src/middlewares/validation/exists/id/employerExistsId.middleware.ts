import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const employerExistsId = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { id_employer } = request.params;

  // check if employer with same id already exists
  const employerExists = await prisma.employer.findFirst({
    where: { id: id_employer },
  });
  if (!employerExists) {
    response.status(404);
    throw new Error("Cliente não existe com este ID!");
  }

  return next();
};
