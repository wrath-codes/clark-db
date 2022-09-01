import { NextFunction, Request, Response } from "express";

export const regexAnsRegister = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { ans_register } = request.body;

  // passes if not provided provided
  if (!ans_register) {
    return next();
  }

  if (!/^\d{9}$/.test(ans_register)) {
    response.status(400);
    throw new Error("Registro ANS Inválido!");
  }

  return next();
};
