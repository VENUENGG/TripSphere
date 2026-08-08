import { createContext, useContext, useState } from "react";

const TripContext = createContext();

export function TripProvider({ children }) {
 const [trip, setTrip] = useState({
  destination: "",
  country: null,
  weather: null,
  budget: null,
  image: null,
});

  function updateTrip(data) {
    setTrip((prev) => ({
      ...prev,
      ...data,
    }));
  }

  return (
    <TripContext.Provider
      value={{
        trip,
        updateTrip,
      }}
    >
      {children}
    </TripContext.Provider>
  );
}

export function useTrip() {
  return useContext(TripContext);
}