export default function WeatherCard({ weather, unit }) {
  const icon = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;

  return (
    <div className="weather-card">

      <div className="weather-header">
        <div>
          <h2>
            {weather.city}, {weather.country}
          </h2>

          <p>{weather.date}</p>
        </div>

        <img src={icon} alt={weather.description} />
      </div>

      <div className="temperature">
        {Math.round(weather.temperature)}
        {unit === "metric" ? "°C" : "°F"}
      </div>

      <h3>{weather.description}</h3>

      <div className="weather-grid">

        <div>
          <span>Feels Like</span>
          <strong>
            {Math.round(weather.feelsLike)}
            {unit === "metric" ? "°C" : "°F"}
          </strong>
        </div>

        <div>
          <span>Humidity</span>
          <strong>{weather.humidity}%</strong>
        </div>

        <div>
          <span>Wind</span>
          <strong>{weather.wind} m/s</strong>
        </div>

        <div>
          <span>Pressure</span>
          <strong>{weather.pressure} hPa</strong>
        </div>

        <div>
          <span>Visibility</span>
          <strong>{weather.visibility / 1000} km</strong>
        </div>

      </div>

    </div>
  );
}