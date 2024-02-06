
export const generateFunComparisonMessage = (comparisonResult) => {
  const rwandaTemperature = comparisonResult.rwandaCity.temperature;
  const swedenTemperature = comparisonResult.swedenCity.temperature;

  if (rwandaTemperature > swedenTemperature) {
    return 'Whoa! It seems like Kigali is bringing the heat. Hotter than Stockholm!';
  } else if (rwandaTemperature < swedenTemperature) {
    return 'Brrr! Stockholm is chilly today. Colder than Kigali!';
  } else {
    return 'Looks like Kigali and Stockholm are experiencing similar temperatures. Weather twins!';
  }
};

export const generateWeaklyFunComparisonMessage = (comparisonResult) => {
  const rwandaWeeklyForecast = comparisonResult.rwandaCity.weeklyForecast;
  const swedenWeeklyForecast = comparisonResult.swedenCity.weeklyForecast;

  const rwandaAverageTemperature =
    rwandaWeeklyForecast.reduce((sum, day) => sum + day.temperature, 0) / rwandaWeeklyForecast.length;

  const swedenAverageTemperature =
    swedenWeeklyForecast.reduce((sum, day) => sum + day.temperature, 0) / swedenWeeklyForecast.length;

  if (rwandaAverageTemperature > swedenAverageTemperature) {
    return 'Whoa! It seems like Kigali is bringing the heat this week. Hotter than Stockholm!';
  } else if (rwandaAverageTemperature < swedenAverageTemperature) {
    return 'Brrr! Stockholm is chilly this week. Colder than Kigali!';
  } else {
    return 'Looks like Kigali and Stockholm are experiencing similar average temperatures this week. Weather twins!';
  }
};
