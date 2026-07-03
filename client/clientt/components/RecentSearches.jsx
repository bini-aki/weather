export default function RecentSearches({
  recent,
  searchWeather,
}) {
  if (recent.length === 0) return null;

  return (
    <div className="recent">

      <h3>Recent Searches</h3>

      <div className="recent-list">

        {recent.map((city, index) => (
          <button
            key={index}
            onClick={() => searchWeather(city)}
          >
            {city}
          </button>
        ))}

      </div>

    </div>
  );
}