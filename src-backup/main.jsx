import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "./App.jsx";
import { TripProvider } from "./context/TripContext";
import { JourneyProvider } from "./context/JourneyContext";
import AIJourneyDesigner from "./components/itinerary/AIJourneyDesigner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <TripProvider>
  <JourneyProvider>
    
    <App />
    </JourneyProvider>
</TripProvider>
  </StrictMode>
  
);