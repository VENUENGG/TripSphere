import { useState } from "react";
import { Search } from "lucide-react";

export default function FlightSearch({ onSearch }) {
  const [from, setFrom] = useState("Mumbai");
  const [to, setTo] = useState("Tokyo");
  const [date, setDate] = useState("");

  return (
    <section className="mx-auto mt-24 max-w-7xl px-6">

      <div className="mb-10 text-center">

        <h2 className="text-5xl font-black">
          Flight Search
        </h2>

        <p className="mt-4 text-slate-600">
          Find available flights instantly.
        </p>

      </div>

      <div className="grid gap-5 rounded-3xl bg-white p-8 shadow-2xl md:grid-cols-4">

        <input
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="Departure"
          className="rounded-2xl border border-slate-200 p-4 outline-none focus:border-blue-500"
        />

        <input
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="Destination"
          className="rounded-2xl border border-slate-200 p-4 outline-none focus:border-blue-500"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="rounded-2xl border border-slate-200 p-4 outline-none focus:border-blue-500"
        />

        <button
          onClick={() => onSearch(from, to, date)}
          className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 font-semibold text-white transition hover:bg-blue-700"
        >
          <Search size={18} />
          Search Flights
        </button>

      </div>

    </section>
  );
}