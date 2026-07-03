import ForecastCard from "./ForecastCard";

export default function Forecast({ forecast }) {
  return (
    <section className="forecast">

      <h2>5-Day Forecast</h2>

      <div className="forecast-grid">
        {forecast.map((day, index) => (
          <ForecastCard
            key={index}
            day={day}
          />
        ))}
      </div>

    </section>
  );
}