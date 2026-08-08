import { ArrowRight, Compass } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroButtons() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);

    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row">

      <motion.button
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => scrollTo("#workspace")}
        className="group flex items-center justify-center gap-3 rounded-2xl bg-black px-8 py-4 font-semibold text-white shadow-[0_18px_50px_rgba(0,0,0,.16)] transition"
      >
        Open Workspace

        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => scrollTo("#workspace")}
        className="group flex items-center justify-center gap-3 rounded-2xl border border-neutral-200 bg-white px-8 py-4 font-semibold text-neutral-800 shadow-sm transition hover:border-black"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 transition group-hover:bg-black group-hover:text-white">
          <Compass size={17} />
        </div>

        Explore Workspace
      </motion.button>

    </div>
  );
}