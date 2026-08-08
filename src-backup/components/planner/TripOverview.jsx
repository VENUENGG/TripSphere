import {
  MapPin,
  CalendarDays,
  Users,
  Wallet,
  Star,
  Sun,
} from "lucide-react";
import { motion } from "framer-motion";
import { useJourney } from "../../context/JourneyContext";

export default function TripOverview() {
  const { journey } = useJourney();

  if (!journey) {
    return (
      <div className="rounded-[36px] border border-slate-200 bg-white p-12 text-center shadow-xl">
        <h2 className="text-3xl font-black text-slate-900">
          No Trip Planned Yet
        </h2>

        <p className="mt-4 text-slate-500">
          Generate an AI itinerary to see your trip overview.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-[40px] bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white shadow-[0_35px_90px_rgba(15,23,42,.25)]"
    >
      <div className="p-10">

        <div className="flex items-center gap-3">
          <div className="rounded-full bg-white/10 px-4 py-2">
            <span className="text-sm font-semibold">
              ✨ Trip Overview
            </span>
          </div>
        </div>

        <h1 className="mt-8 text-5xl font-black">
          {journey.destination || "Your Destination"}
        </h1>

        <p className="mt-3 text-lg text-white/70">
          {journey.tripType || "Luxury"} Experience
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-5">

          <Card
            icon={<CalendarDays size={22} />}
            title="Duration"
            value={`${journey.days || "-"} Days`}
          />

          <Card
            icon={<Users size={22} />}
            title="Travellers"
            value={journey.travelWith || "-"}
          />

          <Card
            icon={<Wallet size={22} />}
            title="Budget"
            value={`₹${journey.budget || "-"}`}
          />

          <Card
            icon={<Sun size={22} />}
            title="Weather"
            value="Sunny"
          />

          <Card
            icon={<Star size={22} />}
            title="Trip Score"
            value="98%"
          />

        </div>
      </div>

      <div className="flex h-2">
        <div className="w-1/3 bg-emerald-400" />
        <div className="w-1/3 bg-blue-400" />
        <div className="w-1/3 bg-amber-400" />
      </div>
    </motion.div>
  );
}

function Card({ icon, title, value }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">

      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
        {icon}
      </div>

      <p className="text-sm text-white/60">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-black">
        {value}
      </h3>

    </div>
  );
}