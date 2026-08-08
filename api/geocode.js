
const NOMINATIM_API =
  "https://nominatim.openstreetmap.org/search";

/*
 * Clean generic itinerary locations before
 * sending them to OpenStreetMap.
 */
function normalizePlace(place, destination = "") {
  if (!place) return "";

  let cleaned = String(place).trim();

  cleaned = cleaned
    .replace(/\bhotel\s+(in|at)\s+/gi, "")
    .replace(/\bhotel\b/gi, "")
    .replace(/\bresort\s+(in|at)\s+/gi, "")
    .replace(/\blodge\s+(in|at)\s+/gi, "")
    .trim();

  /*
   * Generic airport names should be searched
   * together with the actual destination.
   */
  if (
    /^(airport|airport terminal|international airport)$/i.test(
      cleaned
    )
  ) {
    return destination;
  }

  return cleaned || destination;
}


/*
 * Search Nominatim.
 */
async function searchNominatim(query) {
  const url =
    `${NOMINATIM_API}?format=json` +
    `&limit=5` +
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


/*
 * Normalize strings so destination matching
 * is more forgiving.
 */
function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}


/*
 * Determine whether a Nominatim result actually
 * belongs to the requested destination.
 *
 * This is the important safety check that prevents
 * Mumbai itineraries from accidentally receiving
 * coordinates from another country.
 */
function resultMatchesDestination(
  result,
  destination
) {
  if (!destination) return true;

  const destinationText =
    normalizeText(destination);

  const address = result?.address || {};

  const searchableAddress = normalizeText(
    [
      result?.display_name,
      address.city,
      address.town,
      address.village,
      address.municipality,
      address.county,
      address.state,
      address.region,
      address.country,
    ]
      .filter(Boolean)
      .join(" ")
  );

  /*
   * Direct destination-name match.
   */
  if (
    searchableAddress.includes(destinationText)
  ) {
    return true;
  }

  /*
   * Some destinations contain multiple words
   * and Nominatim may represent them slightly
   * differently.
   */
  const destinationParts =
    destinationText.split(" ").filter(Boolean);

  if (destinationParts.length > 1) {
    const matchedParts =
      destinationParts.filter((part) =>
        searchableAddress.includes(part)
      );

    if (
      matchedParts.length >=
      Math.ceil(destinationParts.length * 0.6)
    ) {
      return true;
    }
  }

  return false;
}


/*
 * Calculate distance between two coordinates.
 * Used as an additional safety check.
 */
function distanceInKm(
  lat1,
  lng1,
  lat2,
  lng2
) {
  const earthRadius = 6371;

  const dLat =
    ((lat2 - lat1) * Math.PI) / 180;

  const dLng =
    ((lng2 - lng1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;

  return (
    earthRadius *
    2 *
    Math.atan2(
      Math.sqrt(a),
      Math.sqrt(1 - a)
    )
  );
}


/*
 * Find the destination's coordinates first.
 *
 * This gives us a geographic safety center.
 */
async function getDestinationCoordinates(
  destination
) {
  if (!destination) return null;

  try {
    const results =
      await searchNominatim(destination);

    if (!results?.length) {
      return null;
    }

    /*
     * Prefer a result that looks like an actual
     * city / town / destination.
     */
    const preferred =
      results.find((result) => {
        const type =
          String(result.type || "").toLowerCase();

        return [
          "city",
          "town",
          "municipality",
          "village",
          "administrative",
        ].includes(type);
      }) || results[0];

    return {
      lat: Number(preferred.lat),
      lng: Number(preferred.lon),
    };
  } catch (error) {
    console.error(
      `Could not locate destination "${destination}":`,
      error
    );

    return null;
  }
}


/*
 * Geocode one itinerary location.
 */
async function geocodePlace(
  place,
  destination = "",
  destinationCoordinates = null
) {
  if (!place) return null;

  const normalizedPlace =
    normalizePlace(place, destination);

  if (!normalizedPlace) return null;

  const queries = [];

  /*
   * Most specific search:
   *
   * "Gateway of India, Mumbai"
   * "Airport, Mumbai"
   * "Marine Drive, Mumbai"
   */
  if (destination) {
    queries.push(
      `${normalizedPlace}, ${destination}`
    );
  }

  /*
   * Search with country context as a second attempt.
   */
  if (destination) {
    queries.push(
      `${normalizedPlace}, ${destination}, India`
    );
  }

  /*
   * Search the cleaned place by itself.
   */
  queries.push(normalizedPlace);

  /*
   * IMPORTANT:
   *
   * No hardcoded Srinagar.
   * No hardcoded airport city.
   */

  for (const query of queries) {
    try {
      const results =
        await searchNominatim(query);

      if (!results?.length) {
        await new Promise((resolve) =>
          setTimeout(resolve, 1100)
        );

        continue;
      }

      /*
       * First try to find a result that actually
       * belongs to the requested destination.
       */
      let validResult =
        results.find((result) =>
          resultMatchesDestination(
            result,
            destination
          )
        );

      /*
       * If we have destination coordinates,
       * apply an additional geographic filter.
       *
       * This protects against cases where a place
       * name happens to match another location.
       */
      if (
        validResult &&
        destinationCoordinates
      ) {
        const resultLat =
          Number(validResult.lat);

        const resultLng =
          Number(validResult.lon);

        const distance =
          distanceInKm(
            destinationCoordinates.lat,
            destinationCoordinates.lng,
            resultLat,
            resultLng
          );

        /*
         * Allow a large radius because some trips
         * legitimately include nearby attractions.
         *
         * 250 km is intentionally generous.
         */
        if (distance > 250) {
          console.warn(
            `Rejected "${query}" because result is ${Math.round(
              distance
            )} km from ${destination}.`
          );

          validResult = null;
        }
      }

      /*
       * Never blindly accept the first global result.
       */
      if (validResult) {
        return {
          lat: Number(validResult.lat),
          lng: Number(validResult.lon),
          displayName:
            validResult.display_name,
        };
      }

      /*
       * Give Nominatim a little breathing room.
       */
      await new Promise((resolve) =>
        setTimeout(resolve, 1100)
      );
    } catch (error) {
      console.error(
        `Geocoding attempt failed for "${query}":`,
        error
      );

      await new Promise((resolve) =>
        setTimeout(resolve, 1100)
      );
    }
  }

  console.warn(
    `Could not accurately locate "${place}" in "${destination}".`
  );

  return null;
}


/*
 * Vercel API handler.
 */
export default async function handler(
  req,
  res
) {
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

    /*
     * Find the destination center once.
     *
     * We reuse this for every stop instead
     * of searching for the destination repeatedly.
     */
    let destinationCoordinates = null;

    if (destination) {
      destinationCoordinates =
        await getDestinationCoordinates(
          destination
        );

      /*
       * Give Nominatim a little breathing room
       * before starting the stop searches.
       */
      await new Promise((resolve) =>
        setTimeout(resolve, 1100)
      );
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
          destination,
          destinationCoordinates
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
