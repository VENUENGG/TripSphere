import { motion } from "framer-motion";

export default function FeatureCard({
  icon,
  title,
  description,
  gradient,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl p-8 shadow-lg transition-all hover:shadow-2xl"
    >
      {/* Glow */}
      <div
        className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${gradient} opacity-10 blur-3xl transition group-hover:opacity-20`}
      />

      <div
        className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${gradient} text-white shadow-lg`}
      >
        {icon}
      </div>

      <h3 className="mb-3 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="leading-7 text-slate-600">
        {description}
      </p>

      <div
        className={`mt-8 h-1 w-16 rounded-full bg-gradient-to-r ${gradient} transition-all duration-300 group-hover:w-full`}
      />
    </motion.div>
  );
}