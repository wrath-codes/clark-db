import { NextFunction, Request, Response } from "express";

export const regexPhone = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { phone } = request.body;

  // passes if not provided provided
  if (!phone) {
    return next();
  }

  // eslint-disable-next-line no-useless-escape
  if (!/^\([1-9]{2}\)[9]{0,1}[6-9]{1}[0-9]{3}\-[0-9]{4}$/.test(phone)) {
    throw new Error("Telefone Inválido!");
  }

  return next();
};
