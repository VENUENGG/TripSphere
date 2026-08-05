import { motion } from "framer-motion";
import {
  Map,
  Wallet,
  Backpack,
  Calendar,
  Plane,
  LayoutDashboard,
  Check,
} from "lucide-react";

import BentoCard from "./features/BentoCard";

export default function Features() {
  return (
    <section
      id="features"
      className="relative mx-auto mt-32 max-w-7xl px-6"
    >
      {/* Heading */}

      <div className="mb-20 text-center">
        <p className="font-semibold uppercase tracking-[4px] text-blue-600">
          Features
        </p>

        <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
          Everything You Need
          <br />
          For Every Journey
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
          One workspace to discover destinations, manage budgets,
          organize packing, build itineraries and monitor every trip.
        </p>
      </div>

      {/* Bento Grid */}

      <div className="grid auto-rows-[260px] gap-6 lg:grid-cols-4">

        {/* Destination */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <BentoCard className="h-full">

            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-blue-600 p-3 text-white">
                <Map size={24} />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Destination Explorer
                </h3>

                <p className="text-slate-500">
                  Find amazing places instantly
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-r from-sky-500 to-cyan-500 p-8 text-white">

              <p className="text-sm opacity-80">
                Trending Destination
              </p>

              <h4 className="mt-2 text-4xl font-black">
                Goa
              </h4>

              <div className="mt-6 flex gap-3">

                <span className="rounded-full bg-white/20 px-4 py-2">
                  ⭐ 4.9
                </span>

                <span className="rounded-full bg-white/20 px-4 py-2">
                  Beach
                </span>

                <span className="rounded-full bg-white/20 px-4 py-2">
                  Food
                </span>

              </div>

            </div>

          </BentoCard>
        </motion.div>

        {/* Budget */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <BentoCard className="h-full">

            <div className="mb-5 flex items-center gap-3">

              <div className="rounded-2xl bg-emerald-500 p-3 text-white">
                <Wallet size={22} />
              </div>

              <h3 className="font-bold">
                Budget
              </h3>

            </div>

            <h2 className="text-4xl font-black">
              ₹48K
            </h2>

            <div className="mt-5 h-3 rounded-full bg-slate-200">

              <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-emerald-500 to-green-500" />

            </div>

            <div className="mt-5 space-y-2 text-sm">

              <div className="flex justify-between">
                <span>Flights</span>
                <span>₹18K</span>
              </div>

              <div className="flex justify-between">
                <span>Hotel</span>
                <span>₹16K</span>
              </div>

              <div className="flex justify-between">
                <span>Food</span>
                <span>₹8K</span>
              </div>

            </div>

          </BentoCard>
        </motion.div>

        {/* Packing */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <BentoCard className="h-full">

            <div className="mb-5 flex items-center gap-3">

              <div className="rounded-2xl bg-violet-500 p-3 text-white">
                <Backpack size={22} />
              </div>

              <h3 className="font-bold">
                Packing
              </h3>

            </div>

            <div className="space-y-3">

              {["Passport", "Shoes", "Camera", "Power Bank"].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-xl bg-slate-100 p-3"
                >
                  <span>{item}</span>

                  <Check
                    className="text-green-600"
                    size={18}
                  />
                </div>
              ))}

            </div>

          </BentoCard>
        </motion.div>

        {/* Planner */}

        <div className="lg:col-span-2">
          <BentoCard className="h-full">

            <div className="mb-6 flex items-center gap-3">

              <div className="rounded-2xl bg-orange-500 p-3 text-white">
                <Calendar size={22} />
              </div>

              <h3 className="text-2xl font-bold">
                Trip Timeline
              </h3>

            </div>

            <div className="space-y-4">

              {[
                "Mumbai → Goa",
                "Beach & Water Sports",
                "Old Goa Tour",
                "Return Journey",
              ].map((day, index) => (
                <div
                  key={day}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                    {index + 1}
                  </div>

                  <div className="rounded-xl bg-slate-100 px-4 py-3 flex-1">
                    {day}
                  </div>
                </div>
              ))}

            </div>

          </BentoCard>
        </div>

        {/* Dashboard */}

        <div>
          <BentoCard className="h-full">

            <div className="mb-6 flex items-center gap-3">

              <div className="rounded-2xl bg-indigo-500 p-3 text-white">
                <LayoutDashboard size={22} />
              </div>

              <h3 className="font-bold">
                Dashboard
              </h3>

            </div>

            <div className="grid grid-cols-2 gap-3">

              <div className="rounded-2xl bg-slate-100 p-4 text-center">
                <p className="text-sm">Trips</p>
                <h4 className="text-2xl font-bold">04</h4>
              </div>

              <div className="rounded-2xl bg-slate-100 p-4 text-center">
                <p className="text-sm">Weather</p>
                <h4 className="text-2xl font-bold">27°</h4>
              </div>

              <div className="rounded-2xl bg-slate-100 p-4 text-center">
                <p className="text-sm">Budget</p>
                <h4 className="text-2xl font-bold">92%</h4>
              </div>

              <div className="rounded-2xl bg-slate-100 p-4 text-center">
                <p className="text-sm">Days</p>
                <h4 className="text-2xl font-bold">07</h4>
              </div>

            </div>

          </BentoCard>
        </div>

      </div>
    </section>
  );
}