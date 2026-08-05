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

      {/* Floating Card 1 */}

      <FloatingCard
        className="-left-12 top-10"
        icon={<Plane className="text-blue-600" size={22} />}
        title="Flight"
        value="Confirmed"
      />

      {/* Floating Card 2 */}

      <FloatingCard
        className="-right-10 top-40"
        icon={<Wallet className="text-green-600" size={22} />}
        title="Budget"
        value="₹48,000"
      />

      {/* Floating Card 3 */}

      <FloatingCard
        className="bottom-8 left-8"
        icon={<CloudSun className="text-yellow-500" size={22} />}
        title="Weather"
        value="27° Sunny"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-[430px] rounded-[32px] border border-white/50 bg-white/80 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl"
      >

        {/* Header */}

        <div className="flex items-center justify-between">

          <div>

            <h3 className="text-2xl font-bold text-slate-900">
              Trip Dashboard
            </h3>

            <p className="text-slate-500">
              Bali Adventure
            </p>

          </div>

          <div className="rounded-xl bg-blue-100 p-3">

            <MapPin
              className="text-blue-600"
              size={24}
            />

          </div>

        </div>

        {/* Budget */}

        <div className="mt-8">

          <div className="mb-2 flex justify-between">

            <span className="font-medium text-slate-700">
              Budget
            </span>

            <span className="font-bold text-slate-900">
              ₹48,000
            </span>

          </div>

          <div className="h-3 rounded-full bg-slate-200">

            <div className="h-3 w-4/5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>

          </div>

        </div>

        {/* Packing */}

        <div className="mt-8">

          <div className="mb-2 flex justify-between">

            <span className="flex items-center gap-2 text-slate-700">

              <Backpack size={18} />

              Packing

            </span>

            <span className="font-bold">
              82%
            </span>

          </div>

          <div className="h-3 rounded-full bg-slate-200">

            <div className="h-3 w-[82%] rounded-full bg-gradient-to-r from-violet-500 to-pink-500"></div>

          </div>

        </div>

        {/* Checklist */}

        <div className="mt-8 space-y-4">

          <div className="flex justify-between rounded-xl bg-slate-50 p-4">

            <span>✈ Flight</span>

            <span className="font-semibold text-green-600">
              Confirmed
            </span>

          </div>

          <div className="flex justify-between rounded-xl bg-slate-50 p-4">

            <span>🏨 Hotel</span>

            <span className="font-semibold text-blue-600">
              Reserved
            </span>

          </div>

          <div className="flex justify-between rounded-xl bg-slate-50 p-4">

            <span>🚆 Transport</span>

            <span className="font-semibold text-orange-500">
              Scheduled
            </span>

          </div>

        </div>

      </motion.div>

    </div>
  );
}