const axios = require('axios');
import prismaClient from "@config/db/conn.prisma";

class SaveWeatherHistoryService {
  public async get() {
    const historyWeather = await prismaClient.weatherCheck.findMany();

    return historyWeather
  }

  public async filterWheater() {
    const historyWeather = await prismaClient.weatherCheck.findMany({
      where: {
        city: "Porto"
      }
    });

    return historyWeather
  }
}

export default SaveWeatherHistoryService
