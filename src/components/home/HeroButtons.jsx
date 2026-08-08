import { ArrowRight, Compass } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroButtons() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <motion.button
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => scrollTo("#workspace")}
        className="group flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-neutral-950 shadow-[0_20px_55px_rgba(0,0,0,.2)] transition"
      >
        Start Planning
        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => scrollTo("#workspace")}
        className="group flex items-center justify-center gap-3 rounded-2xl border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
      >
        <Compass size={18} />
        Explore TripSphere
      </motion.button>
    </div>
  );
}
