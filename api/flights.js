export default async function handler(req, res) {
  const {
    from,
    to,
    departureDate,
    returnDate,
  } = req.query;

  const url =
    `https://serpapi.com/search.json` +
    `?engine=google_flights` +
    `&departure_id=${from}` +
    `&arrival_id=${to}` +
    `&outbound_date=${departureDate}` +
    (returnDate ? `&return_date=${returnDate}` : "") +
    `&currency=INR` +
    `&hl=en` +
    `&api_key=${process.env.SERPAPI_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const flights = (data.best_flights || []).map((item, index) => {
      const firstFlight = item.flights?.[0];
      const stops = Math.max((item.flights?.length || 1) - 1, 0);

      return {
        id: index + 1,
        airline: firstFlight?.airline || "Unknown Airline",
        from: firstFlight?.departure_airport?.id || from,
        to: firstFlight?.arrival_airport?.id || to,
        departure: firstFlight?.departure_airport?.time || "--:--",
        duration: `${item.total_duration || "--"} mins`,
        stops: stops === 0 ? "Non-stop" : `${stops} Stop`,
        price: item.price || "N/A",
      };
    });

    res.status(200).json({
      best_flights: flights,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to fetch flights",
    });
  }
}