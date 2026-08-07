import FlightCard from "./FlightCard";

export default function FlightList({ flights }) {

  if (!flights.length) return null;

  return (
    <section className="mx-auto mt-12 max-w-7xl space-y-6 px-6">

      {flights.map((flight) => (
        <FlightCard
          key={flight.id}
          flight={flight}
        />
      ))}

    </section>
  );
}