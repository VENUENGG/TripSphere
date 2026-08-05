import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50">
      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-2">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroContent />
        </motion.div>

        {/* Right Dashboard */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <DashboardPreview />
        </motion.div>

      </div>
    </section>
  );
}