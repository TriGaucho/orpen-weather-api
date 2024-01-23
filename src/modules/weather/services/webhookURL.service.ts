import { IWebhookURL } from "@shared/types/WebhookURL";
import prismaClient from "@config/db/conn.prisma";

class CreateWebhookURLService {
  public async post(data: IWebhookURL) {
    const webhookURL = await prismaClient.webhookURL.create({
      data
    })
    return webhookURL
  }
}


export default CreateWebhookURLService
