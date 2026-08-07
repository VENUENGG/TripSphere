import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  Map,
  Plane,
  Wallet,
  Sparkles,
} from "lucide-react";

import PlannerSection from "./PlannerSection";
import DestinationExplorer from "../destination/DestinationExplorer";
import BudgetPlanner from "../planner/BudgetPlanner";
import FlightSearch from "../flights/FlightSearch";
import FlightList from "../flights/FlightList";
import AIJourneyDesigner from "../itinerary/AIJourneyDesigner";

import useFlights from "../../hooks/useFlights";

const tabs = [
  {
    id: "planner",
    title: "Plan Trip",
    icon: CalendarDays,
    description: "Build your itinerary",
  },
  {
    id: "explore",
    title: "Explore",
    icon: Map,
    description: "Discover destinations",
  },
  {
    id: "flights",
    title: "Flights",
    icon: Plane,
    description: "Search flights",
  },
  {
    id: "budget",
    title: "Budget",
    icon: Wallet,
    description: "Estimate expenses",
  },
  {
    id: "ai",
    title: "AI Planner",
    icon: Sparkles,
    description: "Generate journeys",
  },
];

export default function Workspace() {
  const [active, setActive] = useState("planner");
  const { flights, search } = useFlights();

  return (
   <section
  id="workspace"
  className="mx-auto mt-10 max-w-7xl px-6 pb-24"
>

      <div className="mb-14 text-center">

        <span className="rounded-full border border-neutral-200 bg-white px-5 py-2 text-sm font-semibold text-neutral-700 shadow-sm">
          Workspace
        </span>

        <h2 className="mt-6 text-5xl font-black tracking-tight text-black">
          Everything you need.
          <br />
          One workspace.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
          Choose what you want to do. Instead of scrolling through features,
          switch instantly between every travel tool.
        </p>

      </div>

      <div className="mb-12 grid gap-5 md:grid-cols-5">

        {tabs.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`rounded-3xl border p-6 text-left transition-all duration-300 ${
                active === item.id
                  ? "border-black bg-black text-white shadow-2xl"
                  : "border-neutral-200 bg-white hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl"
              }`}
            >
              <Icon size={26} />

              <h3 className="mt-5 text-lg font-bold">
                {item.title}
              </h3>

              <p
                className={`mt-2 text-sm ${
                  active === item.id
                    ? "text-neutral-300"
                    : "text-neutral-500"
                }`}
              >
                {item.description}
              </p>
            </button>
          );
        })}

      </div>

      <div className="overflow-hidden rounded-[36px] border border-neutral-200 bg-white shadow-[0_30px_80px_rgba(0,0,0,.06)]">

        <AnimatePresence mode="wait">

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >

            {active === "planner" && <PlannerSection />}

            {active === "explore" && <DestinationExplorer />}

            {active === "flights" && (
              <>
                <FlightSearch onSearch={search} />
                <FlightList flights={flights} />
              </>
            )}

            {active === "budget" && <BudgetPlanner />}

            {active === "ai" && <AIJourneyDesigner />}

          </motion.div>

        </AnimatePresence>

      </div>

    </section>
  );
}