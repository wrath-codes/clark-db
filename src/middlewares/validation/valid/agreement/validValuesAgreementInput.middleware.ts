import { NextFunction, Request, Response } from "express";

export const validValuesAgreementInput = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { values } = request.body;

  if (!values.age_0_18) {
    response.status(400);
    throw new Error("Informe o valor para a faixa etária de 0 a 18 anos!");
  }
  if (!values.age_19_23) {
    response.status(400);
    throw new Error("Informe o valor para a faixa etária de 19 a 23 anos!");
  }
  if (!values.age_24_28) {
    response.status(400);
    throw new Error("Informe o valor para a faixa etária de 24 a 28 anos!");
  }
  if (!values.age_29_33) {
    response.status(400);
    throw new Error("Informe o valor para a faixa etária de 29 a 33 anos!");
  }
  if (!values.age_34_38) {
    response.status(400);
    throw new Error("Informe o valor para a faixa etária de 34 a 38 anos!");
  }
  if (!values.age_39_43) {
    response.status(400);
    throw new Error("Informe o valor para a faixa etária de 39 a 43 anos!");
  }
  if (!values.age_44_48) {
    response.status(400);
    throw new Error("Informe o valor para a faixa etária de 44 a 48 anos!");
  }
  if (!values.age_49_53) {
    response.status(400);
    throw new Error("Informe o valor para a faixa etária de 49 a 53 anos!");
  }
  if (!values.age_54_58) {
    response.status(400);
    throw new Error("Informe o valor para a faixa etária de 54 a 58 anos!");
  }
  if (!values.age_59_above) {
    response.status(400);
    throw new Error("Informe o valor para a faixa etária de 59 anos ou mais!");
  }

  return next();
};
