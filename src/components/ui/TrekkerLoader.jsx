import { motion } from "framer-motion";
import { Mountain, Sparkles } from "lucide-react";

export default function TrekkerLoader({ compact = false }) {
  return (
    <div className={`relative overflow-hidden rounded-[28px] border border-slate-200 bg-[#f4efe7] ${compact ? "p-5" : "p-8"}`}>
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#d8c7ac]/40 to-transparent" />
      <motion.div
        animate={{ x: [0, -18, 0], y: [0, -3, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-8 bottom-5 h-24 w-40 rounded-full bg-[#d8c7ac]/30 blur-2xl"
      />

      <div className="relative flex items-center gap-5">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-slate-900 shadow-lg">
          <motion.div
            animate={{ x: [-28, 76] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-2 left-0 h-1 w-7 rounded-full bg-white/30"
          />
          <Mountain className="absolute bottom-2 left-2 text-white/70" size={25} />
          <motion.div
            animate={{ x: [0, 2, 0], rotate: [-3, 3, -3] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-7 top-4"
          >
            <div className="relative h-8 w-6">
              <div className="absolute left-2 top-0 h-3 w-3 rounded-full bg-white" />
              <div className="absolute left-1 top-3 h-5 w-4 rounded-t-full bg-white" />
              <div className="absolute left-0 top-5 h-1 w-3 -rotate-45 rounded-full bg-white" />
              <div className="absolute right-0 top-5 h-1 w-3 rotate-[62deg] rounded-full bg-white" />
            </div>
          </motion.div>
          <motion.div
            animate={{ rotate: [-12, 8, -12] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-12 top-6 h-7 w-1 origin-top rounded-full bg-amber-200"
          />
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-slate-400">
            <Sparkles size={13} />
            TripSphere AI
          </div>
          <p className={`${compact ? "text-base" : "text-lg"} mt-1 font-black text-slate-900`}>
            Your guide is trekking the route…
          </p>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            Mapping places, shaping your days and finding the best order for your journey.
          </p>
        </div>
      </div>
    </div>
  );
}
