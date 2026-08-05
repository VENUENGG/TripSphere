import { motion } from "framer-motion";

export default function FloatingCard({
  icon,
  title,
  value,
  className = "",
}) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-2xl border border-white/50 bg-white/80 p-4 shadow-2xl backdrop-blur-xl ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-blue-100 p-3">
          {icon}
        </div>

        <div>
          <p className="text-xs text-slate-500">{title}</p>

          <h4 className="font-bold text-slate-900">
            {value}
          </h4>
        </div>
      </div>
    </motion.div>
  );
}