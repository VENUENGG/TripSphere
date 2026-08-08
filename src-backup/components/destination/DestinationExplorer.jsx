import { useState } from "react";
import SearchBar from "./SearchBar";
import DestinationCard from "./DestinationCard";
import useDestination from "../../hooks/useDestination";

export default function DestinationExplorer() {
  const [query, setQuery] = useState("Bali");

  const {
    destination,
    image,
    loading,
    search,
  } = useDestination();

  return (
    <section
      id="destination"
      className="relative mx-auto mt-36 max-w-7xl px-6"
    >
      {/* Background */}

      <div className="absolute left-0 top-20 -z-10 h-80 w-80 rounded-full bg-sky-300/20 blur-[120px]" />

      <div className="absolute right-0 bottom-0 -z-10 h-96 w-96 rounded-full bg-cyan-300/20 blur-[140px]" />

      {/* Heading */}

      <div className="mb-16 text-center">

        <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
          Explore the World
        </span>

        <h2 className="mt-6 text-5xl font-black leading-tight">
          Discover Your
          <span className="gradient-text"> Next Destination</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
          Search any city or country and instantly explore beautiful imagery,
          live information and an interactive destination map.
        </p>

      </div>

      {/* Search */}

      <div className="glass mx-auto max-w-3xl rounded-[30px] p-5 shadow-2xl">

        <SearchBar
          value={query}
          onChange={setQuery}
          onSearch={() => search(query)}
        />

      </div>

      {/* Card */}

      <div className="mt-14">

        <DestinationCard
          destination={destination}
          image={image}
          loading={loading}
        />

      </div>

    </section>
  );
}