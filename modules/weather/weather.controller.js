import { v4 } from 'uuid'
import status from 'http-status'
import response from '../../helpers/response'
import { getWeatherInfo, getWeeklyWeatherInfo } from './weather.service'
import { generateFunComparisonMessage } from '../../helpers/generateComparisonMessage'

export const getWeather = async (req, res) => {
  try {

    const { rwandaCity, swedenCity } = req.body

    const weatherInfoRwanda = await getWeatherInfo(rwandaCity);
    const weatherInfoSweden = await getWeatherInfo(swedenCity);

    const comparisonResult = {
      rwandaCity: {
        name: rwandaCity,
        temperature: weatherInfoRwanda.main.temp,
        description: weatherInfoRwanda.weather[0].description,
      },
      swedenCity: {
        name: swedenCity,
        temperature: weatherInfoSweden.main.temp,
        description: weatherInfoSweden.weather[0].description,
      },
    };

    const funMessage = generateFunComparisonMessage(comparisonResult);

    return response(res, "success", status.OK, { comparisonResult, funMessage })
  } catch (error) {
    console.error(error)
    return res.send("Server Error")
  }
}

export const getWeaklyWeatherComparison = async (req, res) => {
  try {

    const { rwandaCity, swedenCity } = req.body

    const weeklyWeatherRwanda = await getWeeklyWeatherInfo(rwandaCity);
    const weeklyWeatherSweden = await getWeeklyWeatherInfo(swedenCity);

    const comparisonResult = {
      rwandaCity: {
        name: rwandaCity,
        weeklyForecast: weeklyWeatherRwanda,
      },
      swedenCity: {
        name: swedenCity,
        weeklyForecast: weeklyWeatherSweden,
      },
    };

    const funMessage = generateFunComparisonMessage(comparisonResult);

    return response(res, 'success', status.OK, { comparisonResult, funMessage });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server Error' });
  }
};
