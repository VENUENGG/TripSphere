import { useState } from "react";
import SearchBar from "./SearchBar";
import DestinationCard from "./DestinationCard";
import useDestination from "../../hooks/useDestination";

export default function DestinationExplorer() {
  const [query, setQuery] = useState("Bali");

  const {
    destination,
    search,
  } = useDestination();

  return (
    <section className="mx-auto mt-40 max-w-7xl px-6">

      <div className="mb-14 text-center">

        <h2 className="text-5xl font-black">
          Destination Explorer
        </h2>

        <p className="mt-4 text-slate-600">
          Search any destination and instantly explore it.
        </p>

      </div>

      <SearchBar
        value={query}
        onChange={setQuery}
        onSearch={() => search(query)}
      />

      <div className="mt-12">

        <DestinationCard
          destination={destination}
        />

      </div>

    </section>
  );
}