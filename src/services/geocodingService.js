
const NOMINATIM_API =
  "https://nominatim.openstreetmap.org/search";

/*
 * Clean itinerary locations before sending them
 * to OpenStreetMap.
 */
function normalizePlace(place, destination = "") {
  if (!place) return "";

  let cleaned = String(place).trim();

  // Remove generic hotel wording
  cleaned = cleaned
    .replace(/\bhotel\s+(in|at)\s+/gi, "")
    .replace(/\bhotel\b/gi, "")
    .replace(/\bresort\s+(in|at)\s+/gi, "")
    .replace(/\blodge\s+(in|at)\s+/gi, "")
    .trim();

  // Generic airport → destination
  if (
    /^(airport|airport terminal|international airport)$/i.test(cleaned)
  ) {
    return destination;
  }

  return cleaned || destination;
}

/*
 * Geocode one place using the destination as context.
 *
 * We intentionally DO NOT fall back to the destination
 * coordinates when a specific place cannot be found.
 * Otherwise different locations can incorrectly appear
 * at the same point on the map.
 */
export async function geocodePlace(place, destination = "") {
  if (!place) return null;

  const normalizedPlace = normalizePlace(place, destination);

  if (!normalizedPlace) return null;

  const queries = [];

  // Best search: specific place + destination
  if (destination) {
    queries.push(`${normalizedPlace}, ${destination}`);
  }

  // Second search: exact place
  queries.push(normalizedPlace);

  for (const query of queries) {
    try {
      const response = await fetch(
        `${NOMINATIM_API}?format=json&limit=5&addressdetails=1&accept-language=en&q=${encodeURIComponent(
          query
        )}`
      );

      if (!response.ok) {
        continue;
      }

      const data = await response.json();

      if (!data.length) {
        continue;
      }

      /*
       * Prefer a result that actually belongs to the
       * requested destination when possible.
       */
      let bestResult = data[0];

      if (destination) {
        const destinationWords = destination
          .toLowerCase()
          .split(/[,\s]+/)
          .filter(Boolean);

        const destinationMatch = data.find((result) => {
          const address = result.address || {};

          const addressText = [
            address.city,
            address.town,
            address.village,
            address.state,
            address.county,
            address.country,
            result.display_name,
          ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();

          return destinationWords.some((word) =>
            addressText.includes(word)
          );
        });

        if (destinationMatch) {
          bestResult = destinationMatch;
        }
      }

      return {
        lat: Number(bestResult.lat),
        lng: Number(bestResult.lon),
        displayName: bestResult.display_name,
      };
    } catch (error) {
      console.error(`Geocoding error for ${query}:`, error);
    }
  }

  console.warn(
    `Could not accurately locate "${place}" in "${destination}".`
  );

  return null;
}

/*
 * Geocode every itinerary stop.
 *
 * We keep the original order:
 *
 * Day 1 → Day 2 → Day 3 → Day 4 → Day 5
 *
 * Failed locations are skipped without breaking
 * the remaining route.
 */
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

    if (!location) {
      continue;
    }

    results.push({
      ...stop,
      lat: location.lat,
      lng: location.lng,
      displayName: location.displayName,
    });
  }

  return results;
}

