import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import PlannerSection from "../components/home/PlannerSection";
import CTASection from "../components/home/CTASection";

import BudgetPlanner from "../components/planner/BudgetPlanner";
import DestinationExplorer from "../components/destination/DestinationExplorer";

export default function Home() {
  return (
    <>
      <Hero />

      <Features />

      <PlannerSection />

      <BudgetPlanner />

      <DestinationExplorer />

      <CTASection />
    </>
  );
}