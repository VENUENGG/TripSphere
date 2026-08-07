import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import PlannerSection from "../components/home/PlannerSection";
import BudgetPlanner from "../components/planner/BudgetPlanner";
import DestinationExplorer from "../components/destination/DestinationExplorer";
import FlightSearch from "../components/flights/FlightSearch";
import FlightList from "../components/flights/FlightList";
import TripMap from "../components/map/TripMap";
import CTASection from "../components/home/CTASection";
import AIJourneyDesigner from "../components/itinerary/AIJourneyDesigner";

import useFlights from "../hooks/useFlights";
import { useTrip } from "../context/TripContext";

export default function Home() {
  const { trip } = useTrip();

  const { flights, search } = useFlights();

  return (
    <>
      <Hero />

      <Features />

      <PlannerSection />

      <DestinationExplorer />

      <TripMap destination={trip.country} />

      <FlightSearch onSearch={search} />

      <FlightList flights={flights} />

      <BudgetPlanner />

      <AIJourneyDesigner />

      <CTASection />
    </>
  );
}