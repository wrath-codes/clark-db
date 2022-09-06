import { NextFunction, Request, Response } from "express";
import fetch from "node-fetch";

import { formatCEP } from "@utils/format/formatCEP.util";
import { unformatCEP } from "@utils/format/unformatCEP.util";

// Middleware to get longitude and latitude from CEP Aberto API
export const getAdressCepAberto = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const cep = await unformatCEP(req.cnpj_info.address.zipCode);
  // eslint-disable-next-line no-return-await
  return await fetch(`${process.env.CEP_ABERTO_URL}${cep}`, {
    method: "GET",
    headers: {
      Authorization: `Token token=${process.env.CEP_ABERTO_TOKEN}`,
      "Content-Type": "application/json",
      charset: "utf-8",
      "access-control-allow-origin": "*",
    },
    redirect: "follow",
  })
    .then(async (response) => {
      if (response.status === 40) {
        throw new Error("CEP não encontrado!");
      } else {
        return await response.json();
      }
    })
    .then(async (data) => {
      req.benificiary_address = {
        street: data.logradouro,
        complement: data.complemento,
        district: data.bairro,
        city: data.cidade.nome,
        state: data.estado.sigla,
        zipCode: await formatCEP(data.cep),
      };

      req.latitude = Number(data.latitude);
      req.longitude = Number(data.longitude);
      return next();
    })
    .catch((error) => {
      return res.status(400).json({
        error: error.message,
      });
    });
};
