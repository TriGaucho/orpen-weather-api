import express, { Request,  Response } from 'express';
import routes from './routes';
import Logger from '@shared/logger/Logger';
import AppErrorMiddlewares from '@shared/middlewares/AppErrorMiddlewares';

const app = express();
app.use(express.json());

app.use(routes)

app.use((error: Error, req: Request, res: Response) => {
  Logger.error(error)
  if (error instanceof AppErrorMiddlewares) {
    const errorObject = {
      status: 'instanceof AppError',
      message: error.message
    }
    return res.status(error.statusCode).json(errorObject)
  }

  const errorObject = {
    status: 'error',
    message: 'Erro interno do servidor !'
  }

  return res.status(500).json(errorObject)
})
app.listen(Number(3001), () => {
  console.log('App ON LINE')
});
