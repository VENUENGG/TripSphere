import { useState } from "react";
import { getCountry } from "../services/countryService";

export default function useDestination() {
  const [destination, setDestination] = useState(null);

  async function search(name) {
    try {
      const result = await getCountry(name);
      setDestination(result);
    } catch (error) {
      console.error(error);
      setDestination(null);
    }
  }

  return {
    destination,
    search,
  };
}