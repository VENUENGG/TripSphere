import {
  Hotel,
  UtensilsCrossed,
  Car,
  Ticket,
  Wallet,
  TrendingUp,
  ShieldCheck,
  PiggyBank,
  Lightbulb,
  Backpack,
} from "lucide-react";

export default function BudgetResult({ result }) {
  if (!result) {
    return (
      <div className="flex h-full flex-col items-center justify-center text-center">

        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-black text-white">
          <Wallet size={34} />
        </div>

        <h2 className="mt-6 text-3xl font-bold">
          Budget Report
        </h2>

        <p className="mt-3 max-w-sm leading-7 text-neutral-500">
          Enter your trip information to generate an intelligent travel
          budget with cost insights and recommendations.
        </p>

      </div>
    );
  }

  const format = (v) => `₹${v.toLocaleString("en-IN")}`;

  const daily = Math.round(result.total / 5);

  const emergency = Math.round(result.total * 0.15);

  const accessory = 3900;

  const finalBudget = result.total + emergency + accessory;

  const score =
    result.total < 30000
      ? 96
      : result.total < 60000
      ? 89
      : 82;

  const expenses = [
    {
      title: "Accommodation",
      value: result.hotel,
      icon: Hotel,
    },
    {
      title: "Food",
      value: result.food,
      icon: UtensilsCrossed,
    },
    {
      title: "Transport",
      value: result.transport,
      icon: Car,
    },
    {
      title: "Activities",
      value: result.activities,
      icon: Ticket,
    },
  ];

  return (
    <div className="space-y-6">

      {/* Hero Card */}

      <div className="rounded-[32px] bg-black p-8 text-white">

        <div className="flex items-center justify-between">

          <div>

            <p className="uppercase tracking-[4px] text-white/60">
              Estimated Budget
            </p>

            <h2 className="mt-3 text-5xl font-black">
              {format(result.total)}
            </h2>

          </div>

          <div className="rounded-3xl bg-white/10 p-5">
            <TrendingUp size={40} />
          </div>

        </div>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 gap-4">

        <Card
          icon={<Wallet size={20} />}
          title="Daily Budget"
          value={format(daily)}
        />

        <Card
          icon={<ShieldCheck size={20} />}
          title="Emergency Fund"
          value={format(emergency)}
        />

        <Card
          icon={<Backpack size={20} />}
          title="Travel Essentials"
          value={format(accessory)}
        />

        <Card
          icon={<PiggyBank size={20} />}
          title="Final Estimate"
          value={format(finalBudget)}
        />

      </div>

      {/* Expense Breakdown */}

      <div className="rounded-3xl border border-neutral-200 bg-white p-6">

        <h3 className="text-xl font-bold">
          Expense Breakdown
        </h3>

        <div className="mt-6 space-y-5">

          {expenses.map((item) => {

            const Icon = item.icon;

            return (
              <div key={item.title}>

                <div className="mb-2 flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="rounded-xl bg-neutral-100 p-3">
                      <Icon size={18} />
                    </div>

                    <span className="font-medium">
                      {item.title}
                    </span>

                  </div>

                  <span className="font-bold">
                    {format(item.value)}
                  </span>

                </div>

                <div className="h-2 rounded-full bg-neutral-200">

                  <div
                    className="h-full rounded-full bg-black"
                    style={{
                      width: `${Math.max(
                        20,
                        (item.value / result.total) * 100
                      )}%`,
                    }}
                  />

                </div>

              </div>
            );

          })}

        </div>

      </div>

      {/* Budget Health */}

      <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm uppercase tracking-[3px] text-neutral-500">
              Budget Health
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              {score}/100
            </h3>

          </div>

          <div className="rounded-full bg-black px-5 py-2 text-white">
            Excellent
          </div>

        </div>

      </div>

      {/* AI Suggestions */}

      <div className="rounded-3xl border border-neutral-200 bg-white p-6">

        <div className="mb-5 flex items-center gap-3">

          <div className="rounded-xl bg-black p-3 text-white">
            <Lightbulb size={18} />
          </div>

          <h3 className="text-xl font-bold">
            Smart Saving Tips
          </h3>

        </div>

        <div className="space-y-3 text-neutral-600">

          <p>✓ Book flights 4–6 weeks in advance.</p>

          <p>✓ Reserve hotels early for better prices.</p>

          <p>✓ Use local transportation whenever possible.</p>

          <p>✓ Keep an emergency reserve of 10–15%.</p>

        </div>

      </div>

    </div>
  );
}

function Card({ icon, title, value }) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">

      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100">
        {icon}
      </div>

      <p className="text-sm text-neutral-500">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-bold">
        {value}
      </h3>

    </div>
  );
}