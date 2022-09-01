import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const employerExistsName = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { name } = request.body;

  // check if employer with same name already exists
  const employerExists = await prisma.employer.findFirst({
    where: { name },
  });
  if (employerExists) {
    response.status(400);
    throw new Error("Um Cliente com este nome já existe!");
  }

  return next();
};
