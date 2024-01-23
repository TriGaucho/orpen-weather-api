import prismaClient from '@config/db/conn.prisma';
import Logger from '@shared/logger/Logger';
import { ICheckWeather } from '@shared/types/CheckWeather';
import { IWebhookURL } from '@shared/types/WebhookURL';
import axios from 'axios';
class SendWebhook {

  public async send(weather: ICheckWeather,) {
    const webhook: IWebhookURL[] = await prismaClient.webhookURL.findMany({
      where: {
        city: weather.city,
        country: weather.country,
      }

    })

    if (webhook.length == 0 || !webhook) return

    webhook.forEach(async (w) => {
      Logger.info(`Send for webHook: ${w.webhookURL}`)
      try {
        await axios.post(w.webhookURL, weather)
      } catch (error) {
        Logger.error(`Error send for WebHook: ${w.webhookURL}`)
        return error
      }
    })

    return
  }

}

export default SendWebhook
