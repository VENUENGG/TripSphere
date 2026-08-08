
const NOMINATIM_API =
  "https://nominatim.openstreetmap.org/search";

/*
  Cleans generic itinerary locations before sending them
  to OpenStreetMap.
*/
function normalizePlace(place, destination = "") {
  if (!place) return "";

  let cleaned = String(place).trim();

  // Remove common generic hotel wording
  cleaned = cleaned
    .replace(/\bhotel\s+(in|at)\s+/gi, "")
    .replace(/\bhotel\b/gi, "")
    .replace(/\bresort\s+(in|at)\s+/gi, "")
    .replace(/\blodge\s+(in|at)\s+/gi, "")
    .trim();

  // Generic airport → use destination
  if (
    /^(airport|airport terminal|international airport)$/i.test(cleaned)
  ) {
    return destination;
  }

  // If cleaning removed everything, use destination
  return cleaned || destination;
}

export async function geocodePlace(place, destination = "") {
  if (!place) return null;

  const normalizedPlace = normalizePlace(place, destination);

  if (!normalizedPlace) return null;

  try {
    /*
      First attempt:
      Search the exact place + destination.
    */
    let query = destination
      ? `${normalizedPlace}, ${destination}`
      : normalizedPlace;

    let response = await fetch(
      `${NOMINATIM_API}?format=json&limit=1&q=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
      throw new Error(`Geocoding failed for ${query}`);
    }

    let data = await response.json();

    /*
      Second attempt:
      If the exact search fails, try the cleaned location alone.
    */
    if (!data.length && normalizedPlace !== destination) {
      response = await fetch(
        `${NOMINATIM_API}?format=json&limit=1&q=${encodeURIComponent(
          normalizedPlace
        )}`
      );

      if (response.ok) {
        data = await response.json();
      }
    }

    /*
      Third attempt:
      Fall back to the destination itself.

      This prevents the entire map from failing just because
      one itinerary location could not be found.
    */
    if (!data.length && destination) {
      response = await fetch(
        `${NOMINATIM_API}?format=json&limit=1&q=${encodeURIComponent(
          destination
        )}`
      );

      if (response.ok) {
        data = await response.json();
      }
    }

    if (!data.length) {
      console.warn(`Could not locate: ${place}`);
      return null;
    }

    return {
      lat: Number(data[0].lat),
      lng: Number(data[0].lon),
      displayName: data[0].display_name,
    };
  } catch (error) {
    console.error(`Geocoding error for ${place}:`, error);
    return null;
  }
}

export async function geocodeStops(
  stops = [],
  destination = ""
) {
  const results = [];

  for (const stop of stops) {
    if (!stop?.name) continue;

    const location = await geocodePlace(
      stop.name,
      destination
    );

    /*
      Important:
      Don't break the entire map when one location fails.
      Simply skip that location.
    */
    if (location) {
      results.push({
        ...stop,
        lat: location.lat,
        lng: location.lng,
        displayName: location.displayName,
      });
    }
  }

  return results;
}

