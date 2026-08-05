import { motion } from "framer-motion";

export default function FloatingCard({
  icon,
  title,
  value,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        y: -5,
        scale: 1.05,
      }}
      transition={{ duration: 0.3 }}
      className={`absolute ${className}`}
    >
      <div className="rounded-2xl border border-white/40 bg-white/80 px-5 py-4 shadow-xl backdrop-blur-xl">
        <div className="mb-2 flex items-center gap-3">
          {icon}

          <div>
            <p className="text-xs text-slate-500">
              {title}
            </p>

            <p className="font-semibold text-slate-900">
              {value}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}