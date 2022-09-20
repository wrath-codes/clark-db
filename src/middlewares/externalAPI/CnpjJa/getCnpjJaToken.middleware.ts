/* eslint-disable @typescript-eslint/return-await */
import { NextFunction, Request, Response } from "express";
import fetch from "node-fetch";

interface ICnpjJaPayload {
  idToken: string;
  ttl: number;
}

export const getCnpjJaToken = async (req: Request, res: Response, next: NextFunction) => {
  const result = async (): Promise<ICnpjJaPayload> => {
    return await fetch(`${process.env.CNPJJA_URL}/auth`, {
      method: "POST",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        username: process.env.CNPJJA_USERNAME,
        password: process.env.CNPJJA_PASSWORD,
      }),
    })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then(async (response: { json: () => any }) => {
        return response.json();
      })
      .then((data: ICnpjJaPayload) => {
        return data;
      });
  };

  const { idToken } = await result();
  const { ttl } = await result();

  req.idToken = idToken;
  req.ttl = ttl;

  return next();
};
