const {
  getCurrentWeather,
  getForecast,
  getLocationWeather,
} = require("../services/weatherService");

exports.getWeather = async (req, res, next) => {
  try {
    const { city, unit } = req.query;
    if (!city) return res.status(400).json({ error: "City is required" });
    const data = await getCurrentWeather(city, unit);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getForecast = async (req, res, next) => {
  try {
    const { city, unit } = req.query;
    if (!city) return res.status(400).json({ error: "City is required" });
    const data = await getForecast(city, unit);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getLocationWeather = async (req, res, next) => {
  try {
    const { lat, lon, unit } = req.query;
    if (!lat || !lon) return res.status(400).json({ error: "lat and lon are required" });
    const data = await getLocationWeather(lat, lon, unit);
    res.json(data);
  } catch (err) {
    next(err);
  }
};
