import { useTrip } from "../context/TripContext";
import { getCountry } from "../services/countryService";

export default function useDestination() {
  const { trip, updateTrip } = useTrip();

  async function search(name) {
    try {
      const result = await getCountry(name);

      updateTrip({
        destination: name,
        country: result,
      });

    } catch (error) {
      console.error(error);

      updateTrip({
        destination: "",
        country: null,
      });
    }
  }

  return {
    destination: trip.country,
    search,
  };
}