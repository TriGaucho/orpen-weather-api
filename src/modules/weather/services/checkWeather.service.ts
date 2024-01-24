import axios from 'axios';
import { api, appid, lang, q, units } from "@config/enums/weather.enum";
import { ICheckWeather } from "@shared/types/CheckWeather";
import Logger from "@shared/logger/Logger";
import { Weather } from '../models/Weather';
import SendWebhook from './sendWebhook.service';
class CheckWeatherService {
  public async get({ city, country }: ICheckWeather) {
    const sendWebhook = new SendWebhook()

    try {
      const response = await axios.get(`${api}?q=${city},${country}&units=${units}&lang=${lang}&appid=${appid}`);

      const weatherChecks = await Weather.create({
        city,
        country,
        requestDate: new Date(),
        weatherData: response.data.cod == '404' ? null : response.data
      })

      Logger.info(`Created climate query from ${city}/${country} `)

      await sendWebhook.send(weatherChecks as ICheckWeather)

      return weatherChecks;
    } catch (error) {
      Logger.error(error)
      return error
    }
  }
};

export default CheckWeatherService;
