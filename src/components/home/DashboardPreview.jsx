import {
  Plane,
  Wallet,
  Backpack,
  MapPin,
  CloudSun,
} from "lucide-react";

import { motion } from "framer-motion";
import FloatingCard from "./FloatingCard";

export default function DashboardPreview() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Background Glow */}

      <div className="absolute h-[520px] w-[520px] rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-violet-500/20 blur-3xl"></div>

      {/* Floating Cards */}

      <FloatingCard
        className="-left-16 top-8"
        icon={<Plane className="text-blue-600" size={22} />}
        title="Flight"
        value="Confirmed"
      />

      <FloatingCard
        className="-right-14 top-36"
        icon={<Wallet className="text-emerald-600" size={22} />}
        title="Budget"
        value="₹48,000"
      />

      <FloatingCard
        className="-bottom-2 left-8"
        icon={<CloudSun className="text-yellow-500" size={22} />}
        title="Weather"
        value="27° Sunny"
      />

      {/* Dashboard */}

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{
          y: -6,
          rotateX: 2,
          rotateY: -2,
        }}
        className="relative w-[430px] overflow-hidden rounded-[34px] border border-white/60 bg-white/70 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.14)] backdrop-blur-2xl"
      >
        {/* Top Glow */}

        <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl"></div>

        {/* Header */}

        <div className="relative flex items-center justify-between">

          <div>

            <h3 className="text-2xl font-bold text-slate-900">
              Trip Dashboard
            </h3>

            <p className="mt-1 text-slate-500">
              Bali Adventure
            </p>

          </div>

          <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 text-white shadow-lg">

            <MapPin size={22} />

          </div>

        </div>

        {/* Budget */}

        <div className="mt-9">

          <div className="mb-3 flex justify-between text-sm">

            <span className="font-medium text-slate-600">
              Budget Used
            </span>

            <span className="font-bold text-slate-900">
              ₹48,000
            </span>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-200">

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80%" }}
              transition={{ duration: 1.2 }}
              className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
            />

          </div>

        </div>

        {/* Packing */}

        <div className="mt-8">

          <div className="mb-3 flex justify-between">

            <span className="flex items-center gap-2 font-medium text-slate-700">

              <Backpack size={18} />

              Packing Progress

            </span>

            <span className="font-bold text-slate-900">
              82%
            </span>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-200">

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "82%" }}
              transition={{ duration: 1.4 }}
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-pink-500"
            />

          </div>

        </div>

        {/* Checklist */}

        <div className="mt-9 space-y-3">

          {[
            {
              icon: "✈",
              title: "Flight",
              status: "Confirmed",
              color: "text-green-600",
            },
            {
              icon: "🏨",
              title: "Hotel",
              status: "Reserved",
              color: "text-blue-600",
            },
            {
              icon: "🚆",
              title: "Transport",
              status: "Scheduled",
              color: "text-orange-500",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{
                x: 4,
              }}
              className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white/70 px-5 py-4 transition-all"
            >
              <span className="flex items-center gap-3 font-medium text-slate-700">

                <span className="text-lg">
                  {item.icon}
                </span>

                {item.title}

              </span>

              <span className={`font-semibold ${item.color}`}>
                {item.status}
              </span>
            </motion.div>
          ))}

        </div>
      </motion.div>
    </div>
  );
}