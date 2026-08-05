import {
  Wallet,
  Map,
  Backpack,
  Calendar,
  Plane,
  LayoutDashboard,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Destination Explorer",
    description:
      "Discover destinations with essential travel information and highlights.",
    icon: <Map size={30} />,
    gradient: "from-blue-500 to-cyan-500",
  },

  {
    title: "Budget Planner",
    description:
      "Estimate travel expenses and keep your spending under control.",
    icon: <Wallet size={30} />,
    gradient: "from-emerald-500 to-green-500",
  },

  {
    title: "Packing Checklist",
    description:
      "Stay organized with an interactive checklist before every journey.",
    icon: <Backpack size={30} />,
    gradient: "from-violet-500 to-pink-500",
  },

  {
    title: "Trip Itinerary",
    description:
      "Plan every day of your trip with a beautiful timeline.",
    icon: <Calendar size={30} />,
    gradient: "from-orange-500 to-red-500",
  },

  {
    title: "Transport Planner",
    description:
      "Manage flights, trains and local transportation in one place.",
    icon: <Plane size={30} />,
    gradient: "from-sky-500 to-indigo-500",
  },

  {
    title: "Travel Dashboard",
    description:
      "Monitor your entire trip from one interactive dashboard.",
    icon: <LayoutDashboard size={30} />,
    gradient: "from-indigo-500 to-purple-500",
  },
];

export default function Features() {
  return (
        <section
       id="features"
      className="mx-auto mt-40 max-w-7xl px-6"
        >
      <div className="mb-16 text-center">

        <p className="font-semibold uppercase tracking-[4px] text-blue-600">
          Features
        </p>

        <h2 className="mt-4 text-5xl font-black text-slate-900">
          Everything You Need
          <br />
          For Every Journey
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          TripSphere combines planning, budgeting,
          transport, packing and itinerary management
          into one elegant travel workspace.
        </p>

      </div>

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            {...feature}
          />
        ))}

      </div>
    </section>
  );
}