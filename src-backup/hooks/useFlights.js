import { useState } from "react";
import { searchFlights } from "../services/flightService";

export default function useFlights() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);

  async function search(from, to, departureDate, returnDate) {
    try {
      setLoading(true);

      const data = await searchFlights(
        from,
        to,
        departureDate,
        returnDate
      );

      setFlights(data.best_flights || []);

    } catch (err) {
      console.error(err);
      setFlights([]);
    } finally {
      setLoading(false);
    }
  }

  return {
    flights,
    loading,
    search,
  };
}