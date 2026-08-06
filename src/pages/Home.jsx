import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import PlannerSection from "../components/home/PlannerSection";
import CTASection from "../components/home/CTASection";
import BudgetPlanner from "../components/planner/BudgetPlanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <PlannerSection />
      <BudgetPlanner />
      <CTASection />
    </>
  );
}