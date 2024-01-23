import { Router } from 'express';
import WeatherController from './weather.controller';

const weatherRouter = Router();
const weatherController = new WeatherController();

weatherRouter.get('/weather', weatherController.checkWeather);
weatherRouter.get('/history', weatherController.historyWeather);
weatherRouter.get('/filter', weatherController.filterWheater);
weatherRouter.post('/webhook', weatherController.createWebhook);


export default weatherRouter
