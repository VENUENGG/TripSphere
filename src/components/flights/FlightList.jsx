import { Plane } from "lucide-react";
import { motion } from "framer-motion";

import FlightCard from "./FlightCard";

export default function FlightList({ flights }) {
  if (!flights.length) return null;

  return (
    <section className="mx-auto mt-20 max-w-7xl px-6">

      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
        className="mb-14 flex flex-col items-center justify-between gap-6 md:flex-row"
      >

        <div>

          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 shadow-sm">

            <Plane
              size={16}
              className="text-slate-900"
            />

            <span className="font-semibold text-slate-700">
              Available Flights
            </span>

          </div>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Best Flight Options
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            We found {flights.length} flights for your journey.
          </p>

        </div>

      </motion.div>

      {/* Cards */}

      <div className="grid gap-8">

        {flights.map((flight, index) => (

          <motion.div
            key={flight.id}
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * .08,
            }}
          >

            <FlightCard
              flight={flight}
            />

          </motion.div>

        ))}

      </div>

    </section>
  );
}