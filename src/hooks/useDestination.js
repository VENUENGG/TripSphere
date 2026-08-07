import { useState } from "react";
import { getCountry } from "../services/countryService";
import { getDestinationImage } from "../services/imageService";
import { useTrip } from "../context/TripContext";

export default function useDestination() {
  const { trip, updateTrip } = useTrip();

  const [loading, setLoading] = useState(false);

  async function search(name) {
    if (!name.trim()) return;

    setLoading(true);

    try {
      let country = null;
let image = null;

try {
  country = await getCountry(name);
} catch (e) {
  console.error("Country Error:", e);
}

try {
  image = await getDestinationImage(name);
} catch (e) {
  console.error("Image Error:", e);
}

updateTrip({
  destination: name,
  country,
  image,
});

      updateTrip({
        destination: name,
        country,
        image,
      });
    } catch (err) {
      console.error(err);

      updateTrip({
        destination: name,
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