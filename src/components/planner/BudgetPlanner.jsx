import BudgetForm from "./BudgetForm";
import BudgetResult from "./BudgetResult";
import useBudget from "../../hooks/useBudget";

export default function BudgetPlanner() {
  const { result, calculate } = useBudget();

  return (
    <section className="mx-auto mt-40 max-w-7xl px-6">
      <div className="mb-14 text-center">
        <h2 className="text-5xl font-black">
          Smart Budget Planner
        </h2>

        <p className="mt-4 text-slate-600">
          Estimate your complete trip cost in seconds.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <BudgetForm
          onCalculate={calculate}
        />

        <BudgetResult
          result={result}
        />
      </div>
    </section>
  );
}