export default function UnitToggle({
  unit,
  setUnit,
}) {
  return (
    <div className="toggle">

      <button
        className={
          unit === "metric" ? "active" : ""
        }
        onClick={() => setUnit("metric")}
      >
        °C
      </button>

      <button
        className={
          unit === "imperial" ? "active" : ""
        }
        onClick={() => setUnit("imperial")}
      >
        °F
      </button>

    </div>
  );
}