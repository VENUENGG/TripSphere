import { ArrowRight, Compass } from "lucide-react";
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
    <div className="flex flex-wrap gap-5">

      <motion.button
        whileHover={{ scale: 1.03, y: -3 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => scrollToSection("#planner")}
        className="group flex items-center gap-3 rounded-2xl bg-slate-900 px-8 py-4 font-semibold text-white shadow-[0_20px_50px_rgba(15,23,42,.18)] transition"
      >
        Start Planning

        <ArrowRight
          size={18}
          className="transition group-hover:translate-x-1"
        />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.03, y: -3 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => scrollToSection("#features")}
        className="group flex items-center gap-3 rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 shadow-md transition hover:border-slate-900"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white transition group-hover:rotate-12">
          <Compass size={17} />
        </div>

        Explore Features
      </motion.button>

    </div>
  );
}