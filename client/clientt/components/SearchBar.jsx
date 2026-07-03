"use client";

import { useState } from "react";

export default function SearchBar({ searchWeather }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city.trim()) return;

    searchWeather(city);

    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="search">

      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button>Search</button>

    </form>
  );
}
