export default function BudgetPreview() {
  return (
    <div className="space-y-5">

      <div className="flex items-end justify-between">

        <div>

          <p className="text-sm text-slate-500">
            Estimated Budget
          </p>

          <h2 className="text-4xl font-black text-slate-900">
            ₹48K
          </h2>

        </div>

        <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
          On Track
        </span>

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-200">

        <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-emerald-500 to-green-500" />

      </div>

      <div className="space-y-2">

        <div className="flex justify-between">
          <span>Flights</span>
          <span>₹18K</span>
        </div>

        <div className="flex justify-between">
          <span>Hotel</span>
          <span>₹16K</span>
        </div>

        <div className="flex justify-between">
          <span>Food</span>
          <span>₹8K</span>
        </div>

      </div>

    </div>
  );
}