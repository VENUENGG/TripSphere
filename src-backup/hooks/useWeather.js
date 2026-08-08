import { useEffect, useState } from "react";
import { getWeather } from "../services/weatherService";

export default function useWeather(city = "Bali") {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchWeather() {
      try {
        setLoading(true);

        const data = await getWeather(city);

        setWeather(data);
        setError("");
      } catch (err) {
        console.error(err);
        setError("Failed to load weather");
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  return {
    weather,
    loading,
    error,
  };
}