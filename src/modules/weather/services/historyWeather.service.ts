import { Weather } from "../models/Weather";
class SaveWeatherHistoryService {
  public async get() {
    const historyWeather = await Weather.find();

    return historyWeather
  }
}

export default SaveWeatherHistoryService
