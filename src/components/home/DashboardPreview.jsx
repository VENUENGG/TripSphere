import {
  CalendarDays,
  Compass,
  Plane,
  Wallet,
  Sparkles,
  CloudSun,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import useWeather from "../../hooks/useWeather";

export default function DashboardPreview() {
  const { weather, loading, error } = useWeather("Bali");

  const actions = [
    {
      icon: CalendarDays,
      title: "Plan Trip",
      subtitle: "Create itinerary",
    },
    {
      icon: Compass,
      title: "Explore",
      subtitle: "Find destinations",
    },
    {
      icon: Plane,
      title: "Flights",
      subtitle: "Compare fares",
    },
    {
      icon: Wallet,
      title: "Budget",
      subtitle: "Track spending",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="w-[430px] overflow-hidden rounded-[34px] border border-neutral-200 bg-white shadow-[0_40px_90px_rgba(0,0,0,.08)]"
    >
      {/* Window Bar */}

      <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">

        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        <span className="text-sm font-semibold text-neutral-500">
          TripSphere Workspace
        </span>

        <ArrowUpRight
          size={18}
          className="text-neutral-400"
        />
      </div>

      {/* Active Trip */}

      <div className="border-b border-neutral-200 p-6">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-xs uppercase tracking-[3px] text-neutral-400">
              Active Trip
            </p>

            <h2 className="mt-2 text-3xl font-black">
              Bali
            </h2>
          </div>

          <div className="rounded-2xl bg-black px-4 py-3 text-white">
            <Sparkles size={18} />
          </div>

        </div>

      </div>

      {/* Quick Actions */}

      <div className="grid grid-cols-2 gap-4 p-6">

        {actions.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-neutral-200 p-4 transition hover:border-black hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100">
                <Icon size={18} />
              </div>

              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="mt-1 text-sm text-neutral-500">
                {item.subtitle}
              </p>
            </div>
          );
        })}

      </div>

      {/* Status */}

      <div className="border-t border-neutral-200 p-6">

        <div className="flex items-center justify-between rounded-2xl bg-neutral-50 p-4">

          <div className="flex items-center gap-3">

            <CloudSun size={22} />

            <div>
              <p className="font-semibold">
                {loading
                  ? "Loading..."
                  : error
                  ? "Weather"
                  : weather.city}
              </p>

              <p className="text-sm text-neutral-500">
                {loading
                  ? "--"
                  : error
                  ? "Unavailable"
                  : `${weather.temperature}°`}
              </p>
            </div>

          </div>

          <div className="rounded-full bg-black px-3 py-1 text-sm font-medium text-white">
            Ready
          </div>

        </div>

      </div>
    </motion.div>
  );
}