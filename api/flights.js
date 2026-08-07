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
    `&return_date=${returnDate}` +
    `&currency=INR` +
    `&hl=en` +
    `&api_key=${process.env.SERPAPI_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch flights",
    });
  }
}