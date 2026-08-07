import { motion } from "framer-motion";
import {
  Globe,
  Sparkles,
  Wallet,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    value: "150+",
    label: "Destinations",
    icon: Globe,
  },
  {
    value: "5",
    label: "Planning Tools",
    icon: Sparkles,
  },
  {
    value: "One",
    label: "Travel Workspace",
    icon: Wallet,
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
              delay: 0.35 + index * 0.12,
              duration: 0.45,
            }}
            whileHover={{
              y: -6,
            }}
            className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,.05)] transition-all duration-300 hover:border-neutral-300 hover:shadow-[0_28px_70px_rgba(0,0,0,.08)]"
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                <Icon size={20} />
              </div>

              <ArrowUpRight
                size={18}
                className="text-neutral-300 transition group-hover:text-black"
              />
            </div>

            <h3 className="text-4xl font-black tracking-tight text-black">
              {item.value}
            </h3>

            <p className="mt-2 text-sm font-medium text-neutral-500">
              {item.label}
            </p>
          </motion.div>
        );
      })}

    </div>
  );
}