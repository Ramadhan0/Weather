import express from 'express'
import { getWeather, getWeaklyWeatherComparison } from './weather.controller'

const weatherRouter = express.Router()

weatherRouter.get('/', getWeather)
weatherRouter.get('/weakly', getWeaklyWeatherComparison)

export default weatherRouter;
