import { motion } from "framer-motion";

export default function FloatingCard({
  icon,
  title,
  value,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.06,
        y: -10,
      }}
      className={`absolute z-20 ${className}`}
    >
      <div className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 px-5 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-2xl transition-all duration-300 hover:shadow-[0_25px_60px_rgba(37,99,235,0.20)]">

        {/* Glow */}
        <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl transition duration-500 group-hover:bg-blue-500/30"></div>

        <div className="relative flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/15 to-cyan-400/15 text-blue-600">
            {icon}
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              {title}
            </p>

            <p className="mt-1 text-base font-bold text-slate-900">
              {value}
            </p>
          </div>

        </div>
      </div>
    </motion.div>
  );
}