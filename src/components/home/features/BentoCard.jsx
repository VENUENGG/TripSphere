import { motion } from "framer-motion";

export default function BentoCard({
  children,
  className = "",
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/40
        bg-white/70
        backdrop-blur-xl
        shadow-xl
        hover:shadow-2xl
        transition-all
        duration-300
        ${className}
      `}
    >
      {/* Glow */}
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:bg-blue-400/20" />

      <div className="relative z-10 p-8">
        {children}
      </div>
    </motion.div>
  );
}