import { NextFunction, Request, Response } from "express";

export const providedLogin = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { username, password } = request.body;

  if (!username) {
    response.status(400);
    throw new Error("Usuário não provido!");
  }
  if (!password) {
    response.status(400);
    throw new Error("Senha não provida!");
  }

  return next();
};
