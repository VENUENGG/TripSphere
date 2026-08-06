import { motion } from "framer-motion";

const stats = [
  {
    number: "50+",
    label: "Destinations",
  },
  {
    number: "6",
    label: "Smart Modules",
  },
  {
    number: "100%",
    label: "Interactive Experience",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-14 flex flex-wrap gap-6">
      {stats.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3 + index * 0.15,
            duration: 0.5,
          }}
          whileHover={{
            y: -6,
            scale: 1.03,
          }}
          className="min-w-[180px] rounded-2xl border border-white/70 bg-white/70 px-6 py-5 shadow-[0_12px_35px_rgba(15,23,42,0.08)] backdrop-blur-xl"
        >
          <h3 className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-4xl font-black text-transparent">
            {item.number}
          </h3>

          <p className="mt-2 text-sm font-medium tracking-wide text-slate-500">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}