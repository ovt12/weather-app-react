import { Forecast } from "../models/index.js";
import { Op } from "sequelize";

// TODO: REFACTOR INTO A CLASS
export const mapWeatherResponseToForecastObject = weather => {
  return {
    location_name: weather.location.name,
    location_region: weather.location.region,
    location_country: weather.location.country,
    condition: weather.current.condition.text,
    icon: weather.current.condition.icon,
    temp: weather.current.temp_c,
    temp_feels_like: weather.current.feelslike_c,
  };
};

export const isForecastWithinRequestLimit = (forecast, requestLimit = 10) => {
  const currentDate = new Date();
  const dateToCheck = new Date(forecast.created_at);
  const diffInMilliseconds = Math.abs(dateToCheck - currentDate);
  const diffInMinutes = Math.floor(diffInMilliseconds / 1000 / 60);
  return diffInMinutes <= requestLimit;
};

export const getForecastsByLocationOrderedByCreation = async location =>
  await Forecast.findAll({
    where: { location_name: { [Op.like]: `%${location}%` } },
    order: [["created_at", "DESC"]],
  });
