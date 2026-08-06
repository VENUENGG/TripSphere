import { motion } from "framer-motion";
import PlannerTimeline from "./PlannerTimeline";
import TripSummaryCard from "./TripSummaryCard";

export default function PlannerSection() {
  return (
    <section
  id="planner"
  className="relative mx-auto mt-36 max-w-7xl px-6"
>

      {/* Background Glow */}

      <div className="absolute left-1/2 top-32 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center"
      >

        <p className="font-semibold uppercase tracking-[4px] text-blue-600">
          Planner
        </p>

        <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
          Plan Every Moment.
          <br />
          Effortlessly.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
          Organize destinations, activities, accommodations and transportation
          inside one beautiful travel planner.
        </p>

      </motion.div>

      {/* Layout */}

      <div className="grid gap-10 lg:grid-cols-3">

        <div className="lg:col-span-2 rounded-3xl border border-white/40 bg-white/70 p-8 shadow-xl backdrop-blur-xl">

          <PlannerTimeline />

        </div>

        <TripSummaryCard />

      </div>

    </section>
  );
}