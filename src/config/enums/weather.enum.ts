import 'dotenv/config'

export const api = 'https://api.openweathermap.org/data/2.5/weather';
export const appid = process.env.KEY_WEATHER;
export const lang = 'pt_br';
export const units = 'metric';
export const q = 'granada,ES';

export const schemaWeather = {
  city: {
    required: true
  },
  country: {
    required: true,
    size: 2,
  },
}

export const schemaWebHook = {
  city: {
    required: true
  },
  country: {
    size: 2,
    required: true
  },
  webhookURL: {
    required: true
  }
}
