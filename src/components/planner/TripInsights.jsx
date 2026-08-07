import {
  Star,
  Wallet,
  Sun,
  Users,
  Camera,
  Utensils,
} from "lucide-react";
import { motion } from "framer-motion";
import { useJourney } from "../../context/JourneyContext";

export default function TripInsights() {
  const { journey } = useJourney();

  const cards = [
    {
      title: "Trip Score",
      value: "98%",
      subtitle: "Excellent Match",
      icon: <Star size={22} />,
    },
    {
      title: "Budget Health",
      value:
        Number(journey?.budget || 0) >= 50000
          ? "Premium"
          : "Balanced",
      subtitle: "Based on your budget",
      icon: <Wallet size={22} />,
    },
    {
      title: "Weather",
      value: "Sunny",
      subtitle: "Perfect for travel",
      icon: <Sun size={22} />,
    },
    {
      title: "Best For",
      value: journey?.tripType || "Vacation",
      subtitle: "AI Recommendation",
      icon: <Users size={22} />,
    },
    {
      title: "Photography",
      value: "★★★★★",
      subtitle: "Scenic Locations",
      icon: <Camera size={22} />,
    },
    {
      title: "Food Rating",
      value: "4.9",
      subtitle: "Local Cuisine",
      icon: <Utensils size={22} />,
    },
  ];

  return (
    <div className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-xl">

      <h2 className="mb-8 text-3xl font-black">
        AI Trip Insights
      </h2>

      <div className="grid gap-5 md:grid-cols-2">

        {cards.map((card, index) => (

          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{
              y: -5,
              scale: 1.02,
            }}
            className="rounded-3xl border border-slate-200 p-6 transition"
          >

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white">
              {card.icon}
            </div>

            <p className="text-sm text-slate-500">
              {card.title}
            </p>

            <h3 className="mt-2 text-3xl font-black">
              {card.value}
            </h3>

            <p className="mt-2 text-slate-500">
              {card.subtitle}
            </p>

          </motion.div>

        ))}

      </div>

    </div>
  );
}