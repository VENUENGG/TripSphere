import { useState } from "react";
import { generateItinerary } from "../services/geminiService";

export default function useJourneyAI() {

  const [loading, setLoading] = useState(false);

  const [itinerary, setItinerary] = useState(null);

  async function generateJourney(form) {

    try {

      setLoading(true);

      const result = await generateItinerary(form);

      setItinerary(result);

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }

  }

  return {

    loading,

    itinerary,

    generateJourney,

  };

}