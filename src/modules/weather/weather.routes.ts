import { Router } from 'express';
import WeatherController from './weather.controller';
import { ValidWeatherMiddleware, ValidWebHookMiddleware } from '@shared/middlewares/ValidateMiddlewares';
import { schemaWeather, schemaWebHook } from '@config/enums/weather.enum';

const weatherRouter = Router();
const weatherController = new WeatherController();

weatherRouter.get('/weather', ValidWeatherMiddleware(schemaWeather), weatherController.checkWeather);
weatherRouter.get('/history', weatherController.historyWeather);
weatherRouter.post('/webhook', ValidWebHookMiddleware(schemaWebHook), weatherController.createWebhook);

export default weatherRouter
