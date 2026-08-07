import {
  Hotel,
  UtensilsCrossed,
  Car,
  Ticket,
  Wallet,
  TrendingUp,
} from "lucide-react";

export default function BudgetResult({ result }) {
  if (!result) {
    return (
      <div className="flex h-full min-h-[520px] items-center justify-center rounded-[28px] border border-dashed border-slate-200 bg-slate-50">

        <div className="text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-900 text-white">

            <Wallet size={36} />

          </div>

          <h2 className="mt-6 text-3xl font-black text-slate-900">
            Budget Preview
          </h2>

          <p className="mt-3 max-w-sm text-slate-500">
            Fill in your trip details and we'll estimate your complete travel
            expenses instantly.
          </p>

        </div>

      </div>
    );
  }

  const format = (value) =>
    `₹${value.toLocaleString("en-IN")}`;

  return (
    <div className="space-y-8">

      {/* Total */}

      <div className="rounded-[30px] bg-slate-900 p-8 text-white shadow-2xl">

        <div className="flex items-center justify-between">

          <div>

            <p className="uppercase tracking-[4px] text-white/60">
              Estimated Budget
            </p>

            <h2 className="mt-4 text-5xl font-black">
              {format(result.total)}
            </h2>

          </div>

          <div className="rounded-3xl bg-white/10 p-5">

            <TrendingUp size={42} />

          </div>

        </div>

      </div>

      {/* Cards */}

      <div className="space-y-4">

        <Item
          icon={<Hotel size={22} />}
          title="Accommodation"
          value={format(result.hotel)}
        />

        <Item
          icon={<UtensilsCrossed size={22} />}
          title="Food & Dining"
          value={format(result.food)}
        />

        <Item
          icon={<Car size={22} />}
          title="Transport"
          value={format(result.transport)}
        />

        <Item
          icon={<Ticket size={22} />}
          title="Activities"
          value={format(result.activities)}
        />

      </div>

      {/* Footer */}

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">

        <div className="flex items-center justify-between">

          <span className="text-lg font-semibold text-slate-600">
            Grand Total
          </span>

          <span className="text-3xl font-black text-slate-900">
            {format(result.total)}
          </span>

        </div>

      </div>

    </div>
  );
}

function Item({
  icon,
  title,
  value,
}) {
  return (
    <div className="hover-card flex items-center justify-between rounded-[24px] border border-slate-200 bg-white p-6">

      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
          {icon}
        </div>

        <div>

          <p className="font-bold text-slate-900">
            {title}
          </p>

          <p className="text-sm text-slate-500">
            Estimated Cost
          </p>

        </div>

      </div>

      <h3 className="text-2xl font-black text-slate-900">
        {value}
      </h3>

    </div>
  );
}