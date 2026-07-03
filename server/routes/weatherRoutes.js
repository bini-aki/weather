const express = require("express");

const router = express.Router();

const {
    getWeather,
    getForecast,
    getLocationWeather,
} = require("../controllers/weatherController");

router.get("/weather", getWeather);

router.get("/forecast", getForecast);

router.get("/location", getLocationWeather);

module.exports = router;