const axios = require("axios");

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

const getCurrentWeather = async (city, unit = "metric") => {
  const { data } = await axios.get(`${BASE_URL}/weather`, {
    params: { q: city, units: unit, appid: API_KEY },
  });

  return {
    city: data.name,
    country: data.sys.country,
    temperature: data.main.temp,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    wind: data.wind.speed,
    visibility: data.visibility,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    date: new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
};

const getForecast = async (city, unit = "metric") => {
  const { data } = await axios.get(`${BASE_URL}/forecast`, {
    params: { q: city, units: unit, appid: API_KEY },
  });

  const daily = {};
  data.list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];
    if (!daily[date]) {
      daily[date] = {
        date: new Date(date).toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        }),
        icon: item.weather[0].icon,
        description: item.weather[0].description,
        min: item.main.temp_min,
        max: item.main.temp_max,
      };
    } else {
      if (item.main.temp_min < daily[date].min) daily[date].min = item.main.temp_min;
      if (item.main.temp_max > daily[date].max) daily[date].max = item.main.temp_max;
    }
  });

  return Object.values(daily).slice(0, 5);
};

const getLocationWeather = async (lat, lon, unit = "metric") => {
  const { data } = await axios.get(`${BASE_URL}/weather`, {
    params: { lat, lon, units: unit, appid: API_KEY },
  });

  return {
    city: data.name,
    country: data.sys.country,
    temperature: data.main.temp,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    wind: data.wind.speed,
    visibility: data.visibility,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    date: new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
};

module.exports = { getCurrentWeather, getForecast, getLocationWeather };
