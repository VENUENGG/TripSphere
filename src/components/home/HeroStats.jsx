import { motion } from "framer-motion";
import { Globe, Sparkles, Route } from "lucide-react";

const stats = [
  { value: "150+", label: "Destinations", icon: Globe },
  { value: "AI", label: "Journey Builder", icon: Sparkles },
  { value: "360°", label: "Trip Workspace", icon: Route },
];

export default function HeroStats() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {stats.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + index * 0.12, duration: 0.45 }}
            whileHover={{ y: -5 }}
            className="rounded-2xl border border-white/20 bg-white/10 p-4 text-white shadow-lg backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
                <Icon size={17} />
              </div>
              <div>
                <h3 className="text-xl font-black">{item.value}</h3>
                <p className="text-xs font-medium text-white/65">{item.label}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
