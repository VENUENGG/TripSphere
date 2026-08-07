import { useState } from "react";
import {
  PlaneTakeoff,
  PlaneLanding,
  CalendarDays,
  Search,
} from "lucide-react";

export default function FlightSearch({ onSearch }) {
  const [from, setFrom] = useState("Mumbai");
  const [to, setTo] = useState("Tokyo");
  const [date, setDate] = useState("");

  return (
    <section className="relative mx-auto mt-36 max-w-7xl px-6">

      <div className="absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-slate-200/40 blur-[120px]" />

      {/* Heading */}

      <div className="mb-16 text-center">

        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 shadow-sm">

          <PlaneTakeoff
            size={17}
            className="text-slate-900"
          />

          <span className="font-semibold text-slate-700">
            Flight Search
          </span>

        </div>

        <h2 className="mt-6 text-5xl font-black text-slate-900">

          Find The Best
          <br />
          Flight Deals

        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">

          Compare routes, departure dates and discover the
          best available flights for your journey.

        </p>

      </div>

      {/* Search Card */}

      <div className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,.08)]">

        <div className="grid gap-6 lg:grid-cols-4">

          {/* From */}

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

            <div className="mb-3 flex items-center gap-2 text-slate-500">

              <PlaneTakeoff size={18} />

              <span className="text-sm font-semibold">
                From
              </span>

            </div>

            <input
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Departure City"
              className="w-full bg-transparent text-lg font-semibold outline-none"
            />

          </div>

          {/* To */}

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

            <div className="mb-3 flex items-center gap-2 text-slate-500">

              <PlaneLanding size={18} />

              <span className="text-sm font-semibold">
                Destination
              </span>

            </div>

            <input
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Destination"
              className="w-full bg-transparent text-lg font-semibold outline-none"
            />

          </div>

          {/* Date */}

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

            <div className="mb-3 flex items-center gap-2 text-slate-500">

              <CalendarDays size={18} />

              <span className="text-sm font-semibold">
                Departure Date
              </span>

            </div>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-transparent text-lg font-semibold outline-none"
            />

          </div>

          {/* Button */}

          <button
            onClick={() => onSearch(from, to, date)}
            className="flex items-center justify-center gap-3 rounded-2xl bg-slate-900 text-lg font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl"
          >

            <Search size={20} />

            Search Flights

          </button>

        </div>

      </div>

    </section>
  );
}