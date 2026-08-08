const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const BASE_URL =
  "https://api.openweathermap.org/data/2.5/weather";

export async function getWeather(city = "Bali") {
  const response = await fetch(
    `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error("Weather API request failed");
  }

  const data = await response.json();

  return {
    city: data.name,
    country: data.sys.country,
    temperature: Math.round(data.main.temp),
    humidity: data.main.humidity,
    wind: data.wind.speed,
    description: data.weather[0].main,
    icon: data.weather[0].icon,
  };
}