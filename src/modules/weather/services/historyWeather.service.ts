import prismaClient from "@config/db/conn.prisma";
class SaveWeatherHistoryService {
  public async get() {
    const historyWeather = await prismaClient.weatherCheck.findMany();

    return historyWeather
  }
}

export default SaveWeatherHistoryService
