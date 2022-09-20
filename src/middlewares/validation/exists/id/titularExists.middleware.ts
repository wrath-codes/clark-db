import { prisma } from "@database/prismaClient";
import { NextFunction, Request, Response } from "express";

export const titularExistsId = async (request: Request, response: Response, next: NextFunction) => {
  const { id_titular } = request.params;

  const titular = await prisma.titular.findFirst({
    where: { id: id_titular },
  });

  if (!titular) {
    return response.status(404).json({
      message: "Titular não existe com este ID!",
    });
  }

  return next();
};
