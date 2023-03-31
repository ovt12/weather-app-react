import {
    mapWeatherResponseToForecastObject,
    isForecastWithinRequestLimit,
    getForecastsByLocationOrderedByCreation,
  } from "../utils/index.js";
  import { Forecast } from "../models/index.js";
  
  export const handleGetForecasts = async (req, res) => {
    const { location } = req.query;
  
    if (!location) {
      return res.status(400).send({ message: "No location query parameter given" });
    }
  
    const forecasts = await getForecastsByLocationOrderedByCreation(location);
  
    if (forecasts.length > 0 && isForecastWithinRequestLimit(forecasts[0])) {
      return res.send(forecasts);
    }
  
    const response = await fetch(`${process.env.WEATHER_API_URL}&q=${location}&aqi=no`);
    const weather = await response.json();
  
    if (response.status === 400) {
      return res.status(400).send({ message: weather.error.message });
    }
  
    const forecastToAdd = mapWeatherResponseToForecastObject(weather);
  
    const newForecast = await Forecast.create(forecastToAdd);
  
    res.send([newForecast, ...forecasts]);
  };
  
  export const handlePostForecast = async (req, res) => {
    try {
      const forecast = await Forecast.create(req.body);
      res.status(201).send({ data: `Forecast ID: ${forecast.id} created` });
    } catch (error) {
      res.status(403).send({ message: error.message });
    }
  };
  