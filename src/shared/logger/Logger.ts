import winston from 'winston'
import { format } from "date-fns";

class LoggerFactory {
  static create () {
    const day = format(new Date(), "yyyymmdd")
    const cfg = {
      levels: winston.config.syslog.levels,
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),

      transports: [
        new winston.transports.File({
          filename: `logs/error.${day}.log`,
          level: 'error',
          handleExceptions: true
        }),
        new winston.transports.File({
          filename: `logs/info.${day}.log`,
          handleExceptions: true
        }),
        new winston.transports.Console()
      ]
    }

    return winston.createLogger(cfg)
  }
}

const Logger = LoggerFactory.create()

export default Logger
