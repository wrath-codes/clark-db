import { NextFunction, Request, Response } from "express";
import "express-async-errors";

// Custom error handler
const errorHandler = async (
  error: Error,
  request: Request,
  response: Response,
  _next: NextFunction,
) => {
  const statusCode = response.statusCode === 200 ? 500 : response.statusCode;

  response.status(statusCode);
  response.json({
    success: false,
    message: error.message,
  });
};

// Custom Page Not Found handler
const notFoundHandler = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const error = new Error(`Não encontrou - ${request.originalUrl}`);
  response.status(404);
  next(error);
};

export { errorHandler, notFoundHandler };
