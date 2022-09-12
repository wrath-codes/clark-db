import { NextFunction, Request, Response } from "express";

export const validValuesAgreementEditInput = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { values } = request.body;

  if (values.age_0_18 && values.age_0_18 <= 0) {
    response.status(400);
    throw new Error("Valor do plano para faixa etária de 0 a 18 anos deve ser positivo!");
  }
  if (values.age_19_23 && values.age_19_23 <= 0) {
    response.status(400);
    throw new Error("Valor do plano para faixa etária de 19 a 23 anos deve ser positivo!");
  }
  if (values.age_24_28 && values.age_24_28 <= 0) {
    response.status(400);
    throw new Error("Valor do plano para faixa etária de 24 a 28 anos deve ser positivo!");
  }
  if (values.age_29_33 && values.age_29_33 <= 0) {
    response.status(400);
    throw new Error("Valor do plano para faixa etária de 29 a 33 anos deve ser positivo!");
  }
  if (values.age_34_38 && values.age_34_38 <= 0) {
    response.status(400);
    throw new Error("Valor do plano para faixa etária de 34 a 38 anos deve ser positivo!");
  }
  if (values.age_39_43 && values.age_39_43 <= 0) {
    response.status(400);
    throw new Error("Valor do plano para faixa etária de 39 a 43 anos deve ser positivo!");
  }
  if (values.age_44_48 && values.age_44_48 <= 0) {
    response.status(400);
    throw new Error("Valor do plano para faixa etária de 44 a 48 anos deve ser positivo!");
  }
  if (values.age_49_53 && values.age_49_53 <= 0) {
    response.status(400);
    throw new Error("Valor do plano para faixa etária de 49 a 53 anos deve ser positivo!");
  }
  if (values.age_54_58 && values.age_54_58 <= 0) {
    response.status(400);
    throw new Error("Valor do plano para faixa etária de 54 a 58 anos deve ser positivo!");
  }
  if (values.age_59_above && values.age_59_above <= 0) {
    response.status(400);
    throw new Error("Valor do plano para faixa etária de 59 anos ou mais deve ser positivo!");
  }

  return next();
};
