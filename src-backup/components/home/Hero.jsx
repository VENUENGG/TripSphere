import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
    >
      {/* Luxury Background */}

      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,#ffffff_0%,#f8fafc_35%,#eef2f7_100%)]" />

      <div className="absolute left-[-150px] top-[-100px] h-[420px] w-[420px] rounded-full bg-slate-300/20 blur-[120px]" />

      <div className="absolute right-[-180px] top-20 h-[500px] w-[500px] rounded-full bg-slate-200/30 blur-[140px]" />

      <div className="absolute bottom-[-180px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-slate-300/20 blur-[140px]" />

      {/* Grid */}

      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-20 px-6 pt-32 pb-24 lg:grid-cols-2">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >
          <HeroContent />
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .9 }}
          className="rounded-[40px] border border-slate-200 bg-white p-5 shadow-[0_35px_90px_rgba(15,23,42,.10)]"
        >
          <DashboardPreview />
        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
          className="flex h-14 w-8 justify-center rounded-full border-2 border-slate-400"
        >
          <div className="mt-2 h-3 w-3 rounded-full bg-slate-700" />
        </motion.div>

      </div>

    </section>
  );
}