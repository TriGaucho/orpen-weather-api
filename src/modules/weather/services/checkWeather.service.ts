import { api, appid, lang, q, units } from "@config/enums/weather.enum";
import prismaClient from "@config/db/conn.prisma";
import { ICheckWeather } from "@shared/types/CheckWeather";
import { IWebhookURL } from "@shared/types/WebhookURL";

const axios = require('axios');

class CheckWeatherService {
  public async get({ city, country }: ICheckWeather) {
    try {
      const response = await axios.get(`${api}?q=${city},${country}&units=${units}&lang=${lang}&appid=${appid}`);

      const weatherChecks = await prismaClient.weatherCheck.create({
        data: {
          city,
          country,
          requestDate: new Date(),
          weatherData: !response.data ? null : response.data
        }
      })

      await this.sendWeatherWebhook(weatherChecks)

      return weatherChecks;
    } catch (error) {
      console.log(error);
    }
  }

  private async sendWeatherWebhook(weather: ICheckWeather,) {
    const webhook: IWebhookURL[] = await prismaClient.webhookURL.findMany({
      where: {
        city: weather.city,
        country: weather.country,
      }

    })

    if (webhook.length == 0 || !webhook) return

    webhook.forEach(async (w) => {
      await axios.post(w.webhookURL, weather)
    })

    return
  }
};

export default CheckWeatherService;
