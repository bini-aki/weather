import axios from "axios";

const API = axios.create({
  baseURL: "https://weather-2-o93o.onrender.com/api",
});

export const getCurrentWeather = async (city, unit) => {
  const { data } = await API.get(
    `/weather?city=${city}&unit=${unit}`
  );

  return data;
};

export const getForecast = async (city, unit) => {
  const { data } = await API.get(
    `/forecast?city=${city}&unit=${unit}`
  );

  return data;
};

export const getLocationWeather = async (lat, lon) => {
  const { data } = await API.get(
    `/location?lat=${lat}&lon=${lon}`
  );

  return data;
};
