import { Router } from 'express'
import weather from '@modules/weather/weather.routes'

const routes = Router()

routes.use('/', weather)

export default routes
