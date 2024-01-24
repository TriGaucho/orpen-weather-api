
import * as mongoose from "mongoose";

const weatherSchmea = new mongoose.Schema({
  city: {
    type: String,
    require: true
  },
  country: {
    type: String,
    require: true
  },
  requestDate: {
    type: Date
  },
  weatherData: {
    type: JSON
  }
}
);

export const Weather = mongoose.model("weather", weatherSchmea);
