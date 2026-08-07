import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
        className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2 shadow-md"
      >
        <Sparkles size={16} className="text-amber-500" />

        <span className="text-sm font-semibold text-slate-700">
          AI Powered Premium Travel Planner
        </span>

      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        className="mt-8 text-6xl font-black leading-[1.02] tracking-tight text-slate-900 lg:text-7xl"
      >
        Travel

        <br />

        <span className="text-slate-900">
          Smarter.
        </span>

        <br />

        <span className="text-slate-500">
          Not Harder.
        </span>

      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .9 }}
        className="mt-8 max-w-xl text-xl leading-9 text-slate-600"
      >
        Discover destinations, calculate budgets, search flights,
        build AI-powered itineraries and organize your complete trip
        from one beautiful workspace.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-12"
      >
        <HeroButtons />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        className="mt-16"
      >
        <HeroStats />
      </motion.div>

    </div>
  );
}