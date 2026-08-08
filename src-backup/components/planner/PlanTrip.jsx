import TripOverview from "./TripOverview";
import TripInsights from "./TripInsights";
import BudgetBreakdown from "./BudgetBreakdown";
import JourneyRoute from "./JourneyRoute";
import QuickActions from "./QuickActions";

export default function PlanTrip() {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-6">

      <div className="mb-14 text-center">

        <h2 className="text-5xl font-black text-slate-900">
          Plan Trip
        </h2>

        <p className="mt-4 text-lg text-slate-500">
          Everything about your journey in one premium dashboard.
        </p>

      </div>

      <TripOverview />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">

        <TripInsights />

        <BudgetBreakdown />

      </div>

      <div className="mt-10">

        <JourneyRoute />

      </div>

      <div className="mt-10">

        <QuickActions />

      </div>

    </section>
  );
}