import { IWebhookURL } from "@shared/types/WebhookURL";
import { WebHook } from "../models/WebHook";

class CreateWebhookURLService {
  public async post(data: IWebhookURL) {
    const webhookURL = await WebHook.create({
      ...data
    })
    return webhookURL
  }
}


export default CreateWebhookURLService
