export async function getLocation(place) {

  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${encodeURIComponent(place)}`
  );

  if (!response.ok) {
    throw new Error("Location not found");
  }

  const data = await response.json();

  if (!data.length) {
    throw new Error("Location not found");
  }

  const result = data[0];

  return {

    city:
      result.address.city ||
      result.address.town ||
      result.address.village ||
      place,

    country:
      result.address.country,

    latlng: [
      Number(result.lat),
      Number(result.lon),
    ],

  };

}