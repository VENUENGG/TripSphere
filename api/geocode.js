const NOMINATIM_API =
  "https://nominatim.openstreetmap.org/search";

function normalizePlace(place, destination = "") {
  if (!place) return "";

  let cleaned = String(place).trim();

  cleaned = cleaned
    .replace(/\bhotel\s+(in|at)\s+/gi, "")
    .replace(/\bhotel\b/gi, "")
    .replace(/\bresort\s+(in|at)\s+/gi, "")
    .replace(/\blodge\s+(in|at)\s+/gi, "")
    .trim();

  if (
    /^(airport|airport terminal|international airport)$/i.test(
      cleaned
    )
  ) {
    return destination;
  }

  return cleaned || destination;
}

async function searchNominatim(query) {
  const url =
    `${NOMINATIM_API}?format=json` +
    `&limit=1` +
    `&addressdetails=1` +
    `&accept-language=en` +
    `&q=${encodeURIComponent(query)}`;

  const response = await fetch(url, {
    headers: {
      "User-Agent":
        "TripSphere Travel Planner/1.0",
      "Accept":
        "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Nominatim failed: ${response.status}`
    );
  }

  return response.json();
}

async function geocodePlace(place, destination = "") {
  if (!place) return null;

  const normalizedPlace = normalizePlace(
    place,
    destination
  );

  if (!normalizedPlace) return null;

  /*
   * Try the most specific search first.
   */
  const queries = [];

  if (destination) {
    queries.push(
      `${normalizedPlace}, ${destination}`
    );
  }

  queries.push(normalizedPlace);

  /*
   * Special handling for airports.
   */
  if (
    /airport/i.test(normalizedPlace) &&
    destination
  ) {
    queries.push(
      `${normalizedPlace}, Srinagar, Kashmir, India`
    );

    queries.push(
      `${normalizedPlace}, India`
    );
  }

  /*
   * Destination fallback.
   */
  if (
    destination &&
    normalizedPlace !== destination
  ) {
    queries.push(destination);
  }

  for (const query of queries) {
    try {
      const results =
        await searchNominatim(query);

      if (results?.length) {
        return {
          lat: Number(results[0].lat),
          lng: Number(results[0].lon),
          displayName:
            results[0].display_name,
        };
      }

      /*
       * Small delay between searches so we don't
       * hammer the public Nominatim service.
       */
      await new Promise((resolve) =>
        setTimeout(resolve, 1100)
      );
    } catch (error) {
      console.error(
        `Geocoding attempt failed for "${query}":`,
        error
      );

      /*
       * Continue trying the next query.
       */
    }
  }

  console.warn(
    `Could not accurately locate "${place}" in "${destination}".`
  );

  return null;
}

export default async function handler(req, res) {
  /*
   * Only POST is allowed.
   */
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const {
      stops = [],
      destination = "",
    } = req.body || {};

    if (!Array.isArray(stops)) {
      return res.status(400).json({
        error: "stops must be an array",
      });
    }

    const results = [];

    /*
     * Process sequentially.
     *
     * This is intentional because Nominatim's
     * public service has strict usage limits.
     */
    for (const stop of stops) {
      if (!stop?.name) continue;

      const location =
        await geocodePlace(
          stop.name,
          destination
        );

      if (location) {
        results.push({
          ...stop,
          lat: location.lat,
          lng: location.lng,
          displayName:
            location.displayName,
        });
      }

      /*
       * Respect Nominatim rate limits.
       */
      await new Promise((resolve) =>
        setTimeout(resolve, 1100)
      );
    }

    return res.status(200).json({
      stops: results,
    });

  } catch (error) {
    console.error(
      "TripSphere geocoding API error:",
      error
    );

    return res.status(500).json({
      error: "Geocoding failed",
      stops: [],
    });
  }
}