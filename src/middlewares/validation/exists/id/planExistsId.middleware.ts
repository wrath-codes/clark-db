import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

/**
 * @description This function is responsible for checking if the plan exists in the database by id
 * @params {id_plan} id of the plan
 * @throws {Error} if the plan doesn't exists
 * @returns {Promise<void>}
 * @author Raphael Vaz
 */
export const planExistsId = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { id_plan } = request.params;

  // check if plan with same id already exists
  const planExists = await prisma.plan.findFirst({
    where: { id: id_plan },
  });
  if (!planExists) {
    response.status(404);
    throw new Error("Plano não existe com este ID!");
  }

  return next();
};
