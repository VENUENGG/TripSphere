export async function getCountry(name) {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=false`
  );

  if (!response.ok) {
    throw new Error("Country not found");
  }

  const data = await response.json();

  return data[0];
}