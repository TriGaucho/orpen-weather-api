import { Request, Response } from 'express';
import CheckWeatherService from './services/checkWeather.service';
import HistoryWeatherService from './services/historyWeather.service'
import CreateWebhookURLService from './services/webhookURL.service'

export default class WeatherController {
  public async checkWeather(req: Request, res: Response): Promise<Response> {
    const weatherService = new CheckWeatherService();

    const { city, country } = req.query as { city: string, country: string }

    const response = await weatherService.get({ city, country });

    return res.json(response)
  }

  public async historyWeather(req: Request, res: Response): Promise<Response> {
    const historyWeatherService = new HistoryWeatherService()

    const response = await historyWeatherService.get()

    return res.json(response)
  }

  public async filterWheater(req: Request, res: Response): Promise<Response> {
    const historyWeatherService = new HistoryWeatherService()

    const response = await historyWeatherService.filterWheater()

    return res.json(response)
  }

  public async createWebhook(req: Request, res: Response): Promise<Response> {
    const webhookURLService = new CreateWebhookURLService();

    const { city, country, webhookURL } = req.body as { city: string, country: string, webhookURL: string }

    const response = await webhookURLService.post({ city, country, webhookURL });

    return res.json(response)
  }
}
