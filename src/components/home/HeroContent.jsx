import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-5 py-2 shadow-lg backdrop-blur-md"
      >
        <Sparkles size={15} />
        <span className="text-sm font-semibold">Intelligent Travel Workspace</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mt-8 max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
      >
        Your journey,
        <br />
        beautifully
        <br />
        <span className="text-white/55">planned.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-7 max-w-xl text-base leading-7 text-white/85 sm:text-xl sm:leading-8"
      >
        Discover destinations, shape your route, manage your budget and generate
        a complete AI itinerary — all inside one immersive travel workspace.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="mt-8 flex flex-wrap gap-3"
      >
        {["AI Itinerary", "Journey Map", "Budget Planner", "Destination Explorer"].map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md"
          >
            <CheckCircle2 size={15} />
            {item}
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-10"
      >
        <HeroButtons />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        className="mt-12"
      >
        <HeroStats />
      </motion.div>
    </div>
  );
}
