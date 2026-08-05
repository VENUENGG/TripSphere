import { motion } from "framer-motion";

export default function BentoCard({
  title,
  description,
  icon,
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
        bg-white/60
        backdrop-blur-xl
        shadow-xl
        hover:shadow-2xl
        transition-all
        duration-300
        ${className}
      `}
    >
      {/* Background Glow */}
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20" />

      <div className="relative z-10 p-7">

        <div className="mb-5 flex items-center gap-3">

          <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 text-white shadow-lg">
            {icon}
          </div>

          <div>

            <h3 className="text-xl font-bold text-slate-900">
              {title}
            </h3>

            <p className="text-sm text-slate-500">
              {description}
            </p>

          </div>

        </div>

        {children}

      </div>
    </motion.div>
  );
}