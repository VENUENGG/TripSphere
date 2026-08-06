import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/70 px-5 py-2 text-sm font-semibold text-blue-700 shadow-lg backdrop-blur-xl"
      >
        <Sparkles size={16} className="text-cyan-500" />
        Everything You Need for Smarter Trips
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-black leading-[1.02] tracking-tight text-slate-900 md:text-7xl"
      >
        Everything You Need.

        <span className="mt-2 block bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
          For Your Next Adventure.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85 }}
        className="mt-8 max-w-xl text-lg leading-8 text-slate-600"
      >
        Plan destinations, manage budgets, organize packing lists, and build
        beautiful travel itineraries—all from one modern workspace designed for
        explorers.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-10"
      >
        <HeroButtons />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.15 }}
        className="mt-14"
      >
        <HeroStats />
      </motion.div>
    </div>
  );
}