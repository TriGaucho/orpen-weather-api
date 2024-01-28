import Logger from "@shared/logger/Logger"

export class ApiError extends Error {
  public readonly statusCode: number

  constructor(message: string, statusCode: number){
    Logger.error({statusCode, message})
    super(message)
    this.statusCode = statusCode
  }
}
