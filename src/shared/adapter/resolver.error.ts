import { NextFunction, Request, Response } from 'express';
import { Handler } from "express";

export const Resolver = (handlerFn: Handler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(handlerFn(req, res, next))
    .catch(e => next(e))
  }
}
