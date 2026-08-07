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
        transition={{ duration: .5 }}
        className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 shadow-sm"
      >
        <Sparkles size={15} className="text-black" />

        <span className="text-sm font-semibold text-neutral-700">
          Intelligent Travel Workspace
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        className="mt-8 text-6xl font-black leading-[1.02] tracking-tight text-black lg:text-7xl"
      >
        Plan Every
        <br />
        Journey From
        <br />
        <span className="text-neutral-400">
          One Workspace.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        className="mt-8 max-w-xl text-xl leading-9 text-neutral-600"
      >
        Stop switching between websites. Search destinations,
        compare flights, manage budgets and generate AI itineraries
        inside one seamless travel planning experience.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .9 }}
        className="mt-8 flex flex-wrap gap-3"
      >
        {[
          "Trip Planning",
          "Destination Explorer",
          "Flight Search",
          "Budget Planner",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm"
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
        className="mt-12"
      >
        <HeroButtons />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        className="mt-14"
      >
        <HeroStats />
      </motion.div>

    </div>
  );
}