import { NextFunction, Request, Response } from "express";

export const validContractDate = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { startDate, endDate } = request.body;

  // check if startDate is before endDate
  if (startDate && endDate) {
    if (startDate > endDate) {
      response.status(400);
      throw new Error("A data de início não pode ser posterior à data de término!");
    }
  }

  return next();
};
