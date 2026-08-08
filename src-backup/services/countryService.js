const API_KEY = import.meta.env.VITE_API_NINJAS_KEY;

export async function getCountry(name) {
  const response = await fetch(
    `https://api.api-ninjas.com/v1/country?name=${encodeURIComponent(name)}`,
    {
      headers: {
        "X-Api-Key": API_KEY,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Country not found");
  }

  const data = await response.json();

  if (!data.length) {
    throw new Error("Country not found");
  }

  const country = data[0];

  return {
    name: {
      common: country.name,
    },
    capital: [country.capital],
    region: country.region,
    population: country.population,
    currencies: {
      main: {
        name: country.currency.name,
      },
    },
    languages: {
      main: country.language?.join(", ") || "Unknown",
    },
    flags: {
      svg: "",
    },
  };
}