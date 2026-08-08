export async function getCoordinates(place) {

  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(place)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch coordinates");
  }

  const data = await response.json();

  if (!data.length) {
    throw new Error("Location not found");
  }

  return [
    Number(data[0].lat),
    Number(data[0].lon),
  ];
}