import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "./App.jsx";
import { TripProvider } from "./context/TripContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <TripProvider>
    <App />
</TripProvider>
  </StrictMode>
);