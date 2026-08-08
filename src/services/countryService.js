const API_KEY = import.meta.env.VITE_API_NINJAS_KEY;

const COUNTRY_ALIASES = {
  usa: "United States",
  us: "United States",
  uk: "United Kingdom",
  uae: "United Arab Emirates",
  dubai: "United Arab Emirates",
  bali: "Indonesia",
  goa: "India",
  kashmir: "India",
  srinagar: "India",
  tokyo: "Japan",
  paris: "France",
  london: "United Kingdom",
  singapore: "Singapore",
  bangkok: "Thailand",
  phuket: "Thailand",
  maldives: "Maldives",
};

function normalizeLanguages(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value.filter(Boolean).map(String);
  if (typeof value === "object") return Object.values(value).filter(Boolean).map(String);
  if (typeof value === "string") {
    return value
      .split(/,|;|\||\band\b/gi)
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return [];
}

function normalizeCountryResult(country) {
  const languages = normalizeLanguages(country.language ?? country.languages);
  const currencyName =
    country.currency?.name ||
    (country.currencies ? Object.values(country.currencies)[0]?.name : "");

  return {
    name: { common: country.name || country.name?.common || "" },
    capital: country.capital ? [country.capital] : [],
    region: country.region || "",
    population: Number(country.population || 0),
    currencies: currencyName
      ? { main: { name: currencyName } }
      : {},
    languages: languages.length
      ? Object.fromEntries(languages.map((language, index) => [`lang${index}`, language]))
      : {},
    flags: { svg: country.flag || "" },
  };
}

async function getFromApiNinjas(name) {
  if (!API_KEY) throw new Error("API Ninjas key is missing");

  const response = await fetch(
    `https://api.api-ninjas.com/v1/country?name=${encodeURIComponent(name)}`,
    { headers: { "X-Api-Key": API_KEY } }
  );

  if (!response.ok) throw new Error("Country API failed");
  const data = await response.json();
  if (!data.length) throw new Error("Country not found");

  return normalizeCountryResult(data[0]);
}

async function getFromRestCountries(name) {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${encodeURIComponent(name)}?fields=name,capital,region,population,currencies,languages,flags`
  );

  if (!response.ok) throw new Error("REST Countries failed");
  const data = await response.json();
  if (!data.length) throw new Error("Country not found");

  const country = data[0];
  return normalizeCountryResult({
    name: country.name?.common,
    capital: country.capital?.[0],
    region: country.region,
    population: country.population,
    currencies: country.currencies,
    languages: country.languages,
    flag: country.flags?.svg,
  });
}

export async function getCountry(name) {
  const cleanName = String(name || "").trim();
  if (!cleanName) throw new Error("Country name is required");

  const alias = COUNTRY_ALIASES[cleanName.toLowerCase()] || cleanName;

  try {
    return await getFromApiNinjas(alias);
  } catch (primaryError) {
    try {
      return await getFromRestCountries(alias);
    } catch (fallbackError) {
      console.error("Country details error:", primaryError, fallbackError);
      throw new Error("Country not found");
    }
  }
}
