import express, { Request, Response } from 'express';
import routes from './routes';
import Logger from '@shared/logger/Logger';
import { AppErrorMiddlewares } from '@shared/middlewares/AppErrorMiddlewares';
import DataBase from '@config/db/conn.mongo'

const app = express();
app.use(express.json());

DataBase();

app.use(routes)
app.use(AppErrorMiddlewares)

app.listen(Number(3001), () => {
  Logger.info('App ON LINE')
});
