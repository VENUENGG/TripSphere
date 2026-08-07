import { motion } from "framer-motion";
import {
  Hotel,
  Utensils,
  Car,
  Camera,
  ShoppingBag,
} from "lucide-react";
import { useJourney } from "../../context/JourneyContext";

export default function BudgetBreakdown() {
  const { journey } = useJourney();

  const total = Number(journey?.budget || 50000);

  const items = [
    {
      title: "Accommodation",
      icon: <Hotel size={18} />,
      percent: 40,
    },
    {
      title: "Food & Dining",
      icon: <Utensils size={18} />,
      percent: 20,
    },
    {
      title: "Transport",
      icon: <Car size={18} />,
      percent: 15,
    },
    {
      title: "Activities",
      icon: <Camera size={18} />,
      percent: 15,
    },
    {
      title: "Shopping",
      icon: <ShoppingBag size={18} />,
      percent: 10,
    },
  ];

  return (
    <div className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-xl">

      <h2 className="mb-8 text-3xl font-black text-slate-900">
        Budget Breakdown
      </h2>

      <div className="space-y-7">

        {items.map((item, index) => {

          const amount = Math.round(
            (total * item.percent) / 100
          );

          return (
            <div key={item.title}>

              <div className="mb-3 flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                    {item.icon}
                  </div>

                  <div>

                    <h3 className="font-bold">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {item.percent}%
                    </p>

                  </div>

                </div>

                <span className="text-lg font-black">
                  ₹{amount.toLocaleString("en-IN")}
                </span>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-200">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${item.percent}%`,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                  }}
                  className="h-full rounded-full bg-slate-900"
                />

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}