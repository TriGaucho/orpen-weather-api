import { Router } from 'express';
import WeatherController from './weather.controller';
import { ValidWeatherMiddleware, ValidWebHookMiddleware } from '@shared/middlewares/ValidateMiddlewares';
import { schemaWeather, schemaWebHook } from '@config/enums/weather.enum';
import { Resolver } from '@shared/adapter/resolver.error';

const weatherRouter = Router();
const weatherController = new WeatherController();

weatherRouter.get('/weather', ValidWeatherMiddleware(schemaWeather), Resolver(weatherController.checkWeather));
weatherRouter.get('/history', Resolver(weatherController.historyWeather));
weatherRouter.post('/webhook', ValidWebHookMiddleware(schemaWebHook), Resolver(weatherController.createWebhook));

export default weatherRouter
