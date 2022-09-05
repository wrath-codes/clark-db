import { NextFunction, Request, Response } from "express";

export const regexReach = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { reach } = request.body;

  // checks if has a valid input
  // valid inputs are MUNICIPIO | GRUPO_MUNICIPIOS | ESTADO | GRUPO_ESTADOS | NACIONAL
  if (
    reach === "MUNICIPIO" ||
    reach === "GRUPO_MUNICIPIOS" ||
    reach === "ESTADO" ||
    reach === "GRUPO_ESTADOS" ||
    reach === "NACIONAL"
  ) {
    return next();
  }
  response.status(400);
  throw new Error(
    "Abrangência precisa ser MUNICIPIO ou GRUPO_MUNICIPIOS ou ESTADO ou GRUPO_ESTADOS ou NACIONAL",
  );
};
