import { NextFunction, Request, Response } from "express";
import fetch from "node-fetch";

import { formatCEP } from "@utils/format/formatCEP.util";
import { formatCNPJ } from "@utils/format/formatCNPJ.util";

interface ICnpjInfoPayload {
  cnpj_info: {
    name: string;
    cnpj: string;
    address: {
      street: string;
      number: number;
      complement?: string;
      district: string;
      city: string;
      state: string;
      zipCode: string;
    };
  };
}

export const getCnpjJaInfo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const result = async (): Promise<ICnpjInfoPayload> => {
    // eslint-disable-next-line no-return-await
    return await formatCNPJ(req.body.cnpj).then(async (cnpj) => {
      // eslint-disable-next-line no-return-await
      return await fetch(`${process.env.CNPJJA_URL}/office/${cnpj}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          charset: "utf-8",
          "access-control-allow-origin": "*",
          Authorization: `Bearer ${req.idToken}`,
        },
        redirect: "follow",
      })
        .then(async (response) => {
          if (response.status === 400) {
            throw new Error("CNPJ não encontrado!");
          } else {
            return await response.json();
          }
        })
        .then(async (data) => {
          return {
            cnpj_info: {
              name: data.alias !== null ? data.alias : data.company.name,
              cnpj: req.body.cnpj,
              address: {
                street: data.address.street,
                number: Number(data.address.number),
                complement: data.address.details,
                district: data.address.district,
                city: data.address.city,
                state: data.address.state,
                zipCode: await formatCEP(data.address.zip),
              },
            },
          };
        });
    });
  };

  const formattedInfo = (await result()).cnpj_info;

  req.cnpj_info = formattedInfo;

  return next();
};
