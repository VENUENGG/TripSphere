import {
  PlaneTakeoff,
  PlaneLanding,
  Clock3,
  Wallet,
} from "lucide-react";

export default function FlightCard({ flight }) {
  return (
    <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_35px_90px_rgba(15,23,42,.12)]">

      {/* Top */}

      <div className="flex flex-col gap-8 p-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Airline */}

        <div className="flex items-center gap-5">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-white">

            <PlaneTakeoff size={28} />

          </div>

          <div>

            <p className="text-sm uppercase tracking-[3px] text-slate-500">
              Airline
            </p>

            <h2 className="text-3xl font-black text-slate-900">
              {flight.airline}
            </h2>

          </div>

        </div>

        {/* Route */}

        <div className="flex flex-1 items-center justify-center gap-8">

          <div className="text-center">

            <p className="text-sm text-slate-500">
              Departure
            </p>

            <h3 className="mt-2 text-2xl font-black text-slate-900">
              {flight.from}
            </h3>

            <p className="mt-1 text-slate-500">
              {flight.departure}
            </p>

          </div>

          <div className="flex flex-1 items-center">

            <div className="h-[2px] flex-1 bg-slate-300" />

            <PlaneTakeoff
              className="mx-3 text-slate-400"
              size={20}
            />

            <div className="h-[2px] flex-1 bg-slate-300" />

          </div>

          <div className="text-center">

            <p className="text-sm text-slate-500">
              Arrival
            </p>

            <h3 className="mt-2 text-2xl font-black text-slate-900">
              {flight.to}
            </h3>

            <p className="mt-1 text-slate-500">
              Destination
            </p>

          </div>

        </div>

        {/* Price */}

        <div className="text-right">

          <p className="text-sm uppercase tracking-[3px] text-slate-500">
            Price
          </p>

          <h2 className="mt-2 text-4xl font-black text-slate-900">
            ₹{flight.price}
          </h2>

        </div>

      </div>

      {/* Bottom */}

      <div className="grid gap-px border-t border-slate-200 bg-slate-200 md:grid-cols-3">

        <div className="flex items-center gap-4 bg-slate-50 p-6">

          <Clock3
            size={22}
            className="text-slate-700"
          />

          <div>

            <p className="text-sm text-slate-500">
              Duration
            </p>

            <h4 className="font-bold text-slate-900">
              {flight.duration}
            </h4>

          </div>

        </div>

        <div className="flex items-center gap-4 bg-slate-50 p-6">

          <PlaneLanding
            size={22}
            className="text-slate-700"
          />

          <div>

            <p className="text-sm text-slate-500">
              Stops
            </p>

            <h4 className="font-bold text-slate-900">
              {flight.stops}
            </h4>

          </div>

        </div>

        <div className="flex items-center gap-4 bg-slate-50 p-6">

          <Wallet
            size={22}
            className="text-slate-700"
          />

          <div>

            <p className="text-sm text-slate-500">
              Booking
            </p>

            <button className="mt-1 rounded-xl bg-slate-900 px-4 py-2 font-semibold text-white transition hover:bg-slate-800">
              Select Flight
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}