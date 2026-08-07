import { createContext, useContext, useState } from "react";

const JourneyContext = createContext();

export function JourneyProvider({ children }) {
  const [journey, setJourney] = useState({
    destination: "",
    tripType: "",
    travelWith: "",
    budget: "",
    days: "",
    arrivalTime: "",
    interests: [],
    itinerary: null,
    loading: false,
  });

  function updateJourney(data) {
    setJourney((prev) => ({
      ...prev,
      ...data,
    }));
  }

  return (
    <JourneyContext.Provider
      value={{
        journey,
        updateJourney,
      }}
    >
      {children}
    </JourneyContext.Provider>
  );
}

export function useJourney() {
  return useContext(JourneyContext);
}