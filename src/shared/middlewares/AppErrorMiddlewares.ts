import express, { NextFunction, Request, Response } from 'express';
import Logger from "../logger/Logger"
import { ApiError } from '@shared/helpers/api.erros';

export const AppErrorMiddlewares = (error: Error & Partial<ApiError>,
  req: Request,
  res: Response,
  next: NextFunction) => {

  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : 'Internal Server Error'

  Logger.error({statusCode, message});
  return res.status(statusCode).json({ message })
}
