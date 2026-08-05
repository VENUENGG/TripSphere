import { motion } from "framer-motion";

const stats = [
  {
    number: 50,
    suffix: "+",
    label: "Destinations",
  },
  {
    number: 6,
    suffix: "",
    label: "Smart Modules",
  },
  {
    number: 100,
    suffix: "%",
    label: "Interactive Experience",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-12 flex flex-wrap gap-12">

      {stats.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.15,
          }}
        >
          <h3 className="text-3xl font-extrabold text-slate-900">
              {item.number}
              {item.suffix}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {item.label}
          </p>
        </motion.div>
      ))}

    </div>
  );
}