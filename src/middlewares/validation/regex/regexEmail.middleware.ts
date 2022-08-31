import { NextFunction, Request, Response } from "express";

export const regexEmail = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { email } = request.body;

  // passes if not provided provided
  if (!email) {
    return next();
  }

  // eslint-disable-next-line no-useless-escape
  if (
    // eslint-disable-next-line no-useless-escape
    !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
      email,
    )
  ) {
    response.status(400);
    throw new Error("Email Inválido!");
  }
  return next();
};
