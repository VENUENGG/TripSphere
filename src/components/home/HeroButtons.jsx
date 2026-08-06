import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroButtons() {
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-5">
      <motion.button
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => scrollToSection("#planner")}
        className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-[0_15px_40px_rgba(37,99,235,0.35)] transition-all duration-300"
      >
        <span className="relative z-10 flex items-center gap-2">
          Start Planning

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1.5"
          />
        </span>

        <span className="absolute inset-0 bg-white/10 opacity-0 transition duration-300 group-hover:opacity-100"></span>
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => scrollToSection("#features")}
        className="group flex items-center gap-3 rounded-2xl border border-white/70 bg-white/70 px-8 py-4 font-semibold text-slate-700 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-cyan-300 hover:bg-white"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 transition group-hover:scale-110">
          <Play
            size={16}
            className="ml-0.5 text-blue-600"
            fill="currentColor"
          />
        </div>

        Explore Features
      </motion.button>
    </div>
  );
}