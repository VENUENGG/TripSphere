import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4">

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 font-semibold text-white shadow-xl transition"
      >
        Start Planning

        <ArrowRight
          size={18}
          className="transition group-hover:translate-x-1"
        />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 shadow-sm transition hover:border-blue-500"
      >
        <Play size={18} />

        Explore Features
      </motion.button>

    </div>
  );
}