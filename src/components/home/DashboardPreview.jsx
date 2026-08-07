import {
  Plane,
  Wallet,
  Backpack,
  MapPin,
  CloudSun,
} from "lucide-react";

import { motion } from "framer-motion";
import useWeather from "../../hooks/useWeather";
import FloatingCard from "./FloatingCard";

export default function DashboardPreview() {

  const { weather, loading, error } = useWeather("Bali");

  return (
    <div className="relative flex justify-center">

      {/* Floating Cards */}

      <FloatingCard
        className="-left-14 top-8"
        icon={<Plane size={18} className="text-slate-900" />}
        title="Flight"
        value="Confirmed"
      />

      <FloatingCard
        className="-right-14 top-32"
        icon={<Wallet size={18} className="text-emerald-600" />}
        title="Budget"
        value="₹48K"
      />

      <FloatingCard
        className="-bottom-2 left-6"
        icon={<CloudSun size={18} className="text-amber-500" />}
        title={
          loading
            ? "Loading..."
            : error
            ? "Weather"
            : weather.city
        }
        value={
          loading
            ? "--"
            : error
            ? "Unavailable"
            : `${weather.temperature}°`
        }
      />

      {/* Main Dashboard */}

      <motion.div
        initial={{
          opacity: 0,
          scale: .92,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: .8,
        }}
        whileHover={{
          y: -5,
        }}
        className="relative w-[430px] overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_35px_90px_rgba(15,23,42,.10)]"
      >

        {/* Header */}

        <div className="border-b border-slate-100 p-7">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm uppercase tracking-[3px] text-slate-400">
                Active Trip
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Bali
              </h2>

            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white">
              <MapPin size={22} />
            </div>

          </div>

        </div>

        {/* Budget */}

        <div className="p-7">

          <div className="mb-3 flex justify-between">

            <span className="font-semibold text-slate-600">
              Budget
            </span>

            <span className="font-bold">
              ₹48,000
            </span>

          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-200">

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: "78%",
              }}
              transition={{
                duration: 1,
              }}
              className="h-full rounded-full bg-slate-900"
            />

          </div>

        </div>

        {/* Packing */}

        <div className="px-7">

          <div className="mb-3 flex justify-between">

            <span className="flex items-center gap-2 font-semibold">

              <Backpack size={17} />

              Packing

            </span>

            <span className="font-bold">
              82%
            </span>

          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-200">

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: "82%",
              }}
              transition={{
                duration: 1.2,
              }}
              className="h-full rounded-full bg-emerald-500"
            />

          </div>

        </div>

        {/* Checklist */}

        <div className="space-y-4 p-7">

          {[
            {
              icon: "✈️",
              title: "Flight",
              status: "Confirmed",
            },
            {
              icon: "🏨",
              title: "Hotel",
              status: "Booked",
            },
            {
              icon: "🚖",
              title: "Transport",
              status: "Ready",
            },
          ].map((item) => (

            <div
              key={item.title}
              className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4 transition hover:bg-slate-100"
            >

              <div className="flex items-center gap-3">

                <span className="text-lg">
                  {item.icon}
                </span>

                <span className="font-semibold">
                  {item.title}
                </span>

              </div>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                {item.status}
              </span>

            </div>

          ))}

        </div>

      </motion.div>

    </div>
  );
}