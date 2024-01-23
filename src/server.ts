import express, { Request,  Response } from 'express';
import routes from './routes';

const app = express();
app.use(express.json());

app.use(routes)

app.listen(Number(3001), () => {
  console.log('App ON LINE')
});
