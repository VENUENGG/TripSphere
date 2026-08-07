import { useState } from "react";
import { useTrip } from "../context/TripContext";
import { getCountry } from "../services/countryService";
import { getLocation } from "../services/locationService";
import { getDestinationImage } from "../services/imageService";

export default function useDestination() {
  const { trip, updateTrip } = useTrip();

  const [loading, setLoading] = useState(false);
  

  async function search(query) {
    try {
      setLoading(true);

      // Find city + country
      const location = await getLocation(query);

      // Country information
      const country = await getCountry(location.country);

      // Extra information
      country.city = location.city;
      country.latlng = location.latlng;

      // Unsplash image
      const image = await getDestinationImage(query);

      // Save EVERYTHING in one update
      updateTrip({
        destination: query,
        country,
        image,
      });

    } catch (err) {
      console.error("Destination Error:", err);

      updateTrip({
        destination: "",
        country: null,
        image: null,
      });

    } finally {
      setLoading(false);
    }
  }

  return {
    destination: trip.country,
    image: trip.image,
    loading,
    search,
  };
}