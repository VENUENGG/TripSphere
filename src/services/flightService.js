const API = "/api/flights";

export async function searchFlights(
  from,
  to,
  departureDate,
  returnDate
) {
  const response = await fetch(
    `${API}?from=${from}&to=${to}&departureDate=${departureDate}&returnDate=${returnDate}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch flights");
  }

  return await response.json();
}