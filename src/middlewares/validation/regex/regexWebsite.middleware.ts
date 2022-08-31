import { NextFunction, Request, Response } from "express";

export const regexWebsite = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { website } = request.body;

  // passes if not provided provided
  if (!website) {
    return next();
  }

  if (
    // eslint-disable-next-line no-useless-escape
    !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(
      website,
    )
  ) {
    response.status(400);
    throw new Error("Website is not valid!");
  }

  return next();
};
