"use client";

import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import WeatherCard from "../../components/WeatherCard";
import Forecast from "../../components/Forecast";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import UnitToggle from "../../components/UnitToggle";
import RecentSearches from "../../components/RecentSearches";

import {
  getCurrentWeather,
  getForecast,
} from "../../services/api";

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [unit, setUnit] = useState("metric");
  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => {
    const data: string[] = JSON.parse(localStorage.getItem("recent") ?? "[]");
    setRecent(data);
  }, []);

  const searchWeather = async (city: string) => {
    try {
      setLoading(true);
      setError("");

      const weatherData = await getCurrentWeather(city, unit);
      const forecastData = await getForecast(city, unit);

      setWeather(weatherData);
      setForecast(forecastData);

      let searches: string[] = JSON.parse(localStorage.getItem("recent") ?? "[]");

      searches = [city, ...searches.filter((c: string) => c !== city)];

      searches = searches.slice(0, 5);

      localStorage.setItem("recent", JSON.stringify(searches));

      setRecent(searches);
    } catch (err) {
      setError("City not found.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container">

      <h1>Weather Dashboard</h1>

      <UnitToggle unit={unit} setUnit={setUnit} />

      <SearchBar searchWeather={searchWeather} />

      <RecentSearches
        recent={recent}
        searchWeather={searchWeather}
      />

      {loading && <Loader />}

      {error && <ErrorMessage message={error} />}

      {weather && <WeatherCard weather={weather} unit={unit} />}

      {forecast.length > 0 && (
        <Forecast forecast={forecast} />
      )}

    </main>
  );
}