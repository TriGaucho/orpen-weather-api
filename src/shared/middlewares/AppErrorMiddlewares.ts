import Logger from "../logger/Logger"

class AppErrorMiddlewares {
  public readonly message: string
  public readonly statusCode: number

  constructor(message: string, statusCode = 400) {
    this.message = message
    this.statusCode = statusCode
    Logger.error({message, statusCode})
  }
}

export default AppErrorMiddlewares;
