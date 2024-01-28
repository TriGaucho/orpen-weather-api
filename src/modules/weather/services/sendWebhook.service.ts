import { WebHook } from '../models/WebHook';
import Logger from '@shared/logger/Logger';
import { ICheckWeather } from '@shared/types/CheckWeather';
import { IWebhookURL } from '@shared/types/WebhookURL';
import axios from 'axios';
class SendWebhook {

  public async send(weather: ICheckWeather,) {
    const webhook: IWebhookURL[] = await WebHook.find({
      $and: [
        { city: weather.city },
        { country: weather.country }
      ]


    })

    if (webhook.length == 0 || !webhook) return

    webhook.forEach(async (w) => {
      Logger.info(`Send for webHook: ${w.webhookURL}`)
      try {
        await axios.post(w.webhookURL, weather)
      } catch (error) {
        Logger.error(`Error send for WebHook: ${w._id}/${w.webhookURL}`)
        return error
      }
    })

    return
  }

}

export default SendWebhook
