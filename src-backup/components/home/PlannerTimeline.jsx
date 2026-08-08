import { motion } from "framer-motion";
import {
  Plane,
  Hotel,
  Umbrella,
  Utensils,
  Camera,
  Ship,
} from "lucide-react";

const itinerary = [
  {
    day: "Day 1",
    items: [
      { icon: <Plane size={18} />, title: "Mumbai → Goa" },
      { icon: <Hotel size={18} />, title: "Hotel Check-in" },
      { icon: <Umbrella size={18} />, title: "Beach Relaxation" },
    ],
  },
  {
    day: "Day 2",
    items: [
      { icon: <Utensils size={18} />, title: "Food Tour" },
      { icon: <Camera size={18} />, title: "Fort Visit" },
      { icon: <Ship size={18} />, title: "Sunset Cruise" },
    ],
  },
];

export default function PlannerTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="space-y-8"
    >
      {itinerary.map((day) => (
        <div key={day.day}>
          <h3 className="mb-4 text-xl font-bold text-slate-900">
            {day.day}
          </h3>

          <div className="space-y-4">
            {day.items.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4 transition hover:bg-slate-100"
              >
                <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                  {item.icon}
                </div>

                <span className="font-medium text-slate-700">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}