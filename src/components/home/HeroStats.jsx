import { motion } from "framer-motion";
import {
  Globe,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    value: "150+",
    label: "Destinations",
    icon: Globe,
  },
  {
    value: "AI",
    label: "Trip Planning",
    icon: Sparkles,
  },
  {
    value: "100%",
    label: "Personalized",
    icon: ShieldCheck,
  },
];

export default function HeroStats() {
  return (
    <div className="grid gap-5 sm:grid-cols-3">

      {stats.map((item, index) => {

        const Icon = item.icon;

        return (

          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: .35 + index * .15,
              duration: .5,
            }}
            whileHover={{
              y: -8,
            }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,.08)] transition"
          >

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
              <Icon size={22} />
            </div>

            <h3 className="text-4xl font-black text-slate-900">
              {item.value}
            </h3>

            <p className="mt-2 text-slate-500">
              {item.label}
            </p>

          </motion.div>

        );

      })}

    </div>
  );
}