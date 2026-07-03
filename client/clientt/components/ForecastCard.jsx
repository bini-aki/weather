export default function ForecastCard({ day }) {
  const icon = `https://openweathermap.org/img/wn/${day.icon}@2x.png`;

  return (
    <div className="forecast-card">

      <h4>{day.date}</h4>

      <img
        src={icon}
        alt={day.description}
      />

      <p>{day.description}</p>

      <div className="temps">
        <span>{Math.round(day.min)}°</span>
        <span>{Math.round(day.max)}°</span>
      </div>

    </div>
  );
}