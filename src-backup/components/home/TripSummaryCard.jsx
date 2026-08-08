import { motion } from "framer-motion";
import {
  Wallet,
  CloudSun,
  CalendarDays,
} from "lucide-react";

export default function TripSummaryCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="rounded-3xl border border-white/40 bg-white/70 p-8 shadow-xl backdrop-blur-xl"
    >
      <h3 className="mb-8 text-2xl font-bold text-slate-900">
        Trip Summary
      </h3>

      <div className="space-y-6">

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Wallet className="text-green-600" />
            <span>Budget</span>
          </div>

          <strong>₹48,000</strong>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CloudSun className="text-yellow-500" />
            <span>Weather</span>
          </div>

          <strong>27°C</strong>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CalendarDays className="text-blue-600" />
            <span>Duration</span>
          </div>

          <strong>7 Days</strong>
        </div>

        <div className="pt-4">

          <div className="mb-2 flex justify-between text-sm">
            <span>Planning Progress</span>
            <span>80%</span>
          </div>

          <div className="h-3 rounded-full bg-slate-200">
            <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
          </div>

        </div>

      </div>
    </motion.div>
  );
}