import Logger from "@shared/logger/Logger";
import * as mongoose from "mongoose";
import 'dotenv/config'

export default async function main() {
  const dataBasesTRING = String(process.env.DATABASE_URL);

  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(dataBasesTRING)
    Logger.info('Conectado ao banco de dados')
  } catch (error) {
    Logger.error(error)
  }
}
