
const GEOCODE_API = "/api/geocode";

/*
 * Frontend geocoding service.
 *
 * IMPORTANT:
 * We no longer call Nominatim directly from the browser.
 *
 * Browser
 *   ↓
 * /api/geocode
 *   ↓
 * Nominatim
 */

export async function geocodeStops(
  stops = [],
  destination = ""
) {
  if (!stops.length) {
    return [];
  }

  try {
    const response = await fetch(GEOCODE_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stops,
        destination,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Geocoding API failed: ${response.status}`
      );
    }

    const data = await response.json();

    return Array.isArray(data.stops)
      ? data.stops
      : [];
  } catch (error) {
    console.error(
      "TripSphere geocoding error:",
      error
    );

    return [];
  }
}

