import { Router } from 'express'
import weather from '@modules/weather/weather.routes'
import LoggerMiddleware from '@shared/middlewares/LoggerMiddleware'

const routes = Router()

routes.use(LoggerMiddleware)

routes.use('/', weather)

export default routes
