const axios = require('axios');

const apiKey = '181c5f07a1e1435121de134ced34d27c';
const apiUrl = 'http://api.openweathermap.org/data/2.5/weather';

export const getWeatherInfo = async (city) => {
  try {
    const response = await axios.get(`${apiUrl}?q=${city}&appid=${apiKey}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather information:', error.message);
    throw error;
  }
};


export const getWeeklyWeatherInfo = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
    );

    const weeklyForecast = parseWeeklyForecast(response.data.list);
    return weeklyForecast;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch weekly weather information');
  }
};

const parseWeeklyForecast = (forecastList) => {
  const dailyForecasts = {};

  forecastList.forEach((forecast) => {
    const date = forecast.dt_txt.split(' ')[0];
    if (!dailyForecasts[date]) {
      dailyForecasts[date] = [];
    }

    const dailyInfo = {
      date: forecast.dt_txt,
      temperature: forecast.main.temp,
      weather: forecast.weather[0].description,
    };

    dailyForecasts[date].push(dailyInfo);
  });

  const weeklyForecast = Object.values(dailyForecasts);

  return weeklyForecast;
};

