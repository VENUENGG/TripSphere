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
      className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:shadow-2xl"
    >
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
    </motion.div>
  );
}