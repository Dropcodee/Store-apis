import { Request, Response, NextFunction } from "express";
import { CustomError } from "../helpers/errors/CustomError";

export const ErrorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.SerializeErrors() });
  }

  res.status(400).send({ errors: [{ message: 'Something went wrong, retry later' }] });
};
