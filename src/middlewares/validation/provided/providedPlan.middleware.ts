import { NextFunction, Request, Response } from "express";

export const providedPlan = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { name, ans_register, reach } = request.body;

  // checks if a name was provided
  if (!name) {
    response.status(400);
    throw new Error("Nome não provido!");
  }
  // checks if a ans_register was provided
  if (!ans_register) {
    response.status(400);
    throw new Error("Registro ANS não provido!");
  }
  // checks if a reach was provided
  if (!reach) {
    response.status(400);
    throw new Error("Abrangência não provida!");
  }

  return next();
};
