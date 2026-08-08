import Hero from "../components/home/Hero";
import Workspace from "../components/home/Workspace";
import TripMap from "../components/map/TripMap";
import { useTrip } from "../context/TripContext";

export default function Home() {
  const { trip } = useTrip();

  return (
    <>
      <Hero />
      <Workspace />
      <TripMap destination={trip.country} />
    </>
  );
}