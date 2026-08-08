import {
  Hotel, UtensilsCrossed, Car, Ticket, Wallet, TrendingUp,
  ShieldCheck, PiggyBank, Lightbulb, Backpack, MapPinned,
} from "lucide-react";

export default function BudgetResult({ result }) {
  if (!result) {
    return (
      <div className="flex h-full flex-col items-center justify-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-900 text-white shadow-xl"><Wallet size={34} /></div>
        <h2 className="mt-6 text-3xl font-bold text-slate-900">Budget Report</h2>
        <p className="mt-3 max-w-sm leading-7 text-neutral-500">Enter your destination and trip details to build a destination-aware travel budget.</p>
      </div>
    );
  }

  const format = (v) => `₹${Math.round(v || 0).toLocaleString("en-IN")}`;
  const emergency = Math.round(result.total * 0.12);
  const accessory = Math.round(Math.max(1200, 650 * result.travelers + 300 * result.days));
  const finalBudget = result.total + emergency + accessory;
  const score = result.confidence === "destination-specific" ? 94 : 86;

  const expenses = [
    { title: "Accommodation", value: result.hotel, icon: Hotel },
    { title: "Food", value: result.food, icon: UtensilsCrossed },
    { title: "Transport", value: result.transport, icon: Car },
    { title: "Activities", value: result.activities, icon: Ticket },
  ];

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-950 via-slate-800 to-sky-900 p-8 text-white shadow-2xl">
        <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="relative">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[4px] text-white/55">{result.confidence === "destination-specific" ? "Destination estimate" : "Regional estimate"}</p>
              <h2 className="mt-3 text-5xl font-black">{format(result.total)}</h2>
              <p className="mt-3 text-white/70">{result.destination} · {result.days} days · {result.travelers} traveller{result.travelers === 1 ? "" : "s"}</p>
            </div>
            <div className="rounded-3xl bg-white/10 p-5 backdrop-blur"><TrendingUp size={36} /></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card icon={<Wallet size={20} />} title="Per day" value={format(result.daily)} />
        <Card icon={<MapPinned size={20} />} title="Per traveller" value={format(result.perTraveler)} />
        <Card icon={<ShieldCheck size={20} />} title="Emergency" value={format(emergency)} />
        <Card icon={<PiggyBank size={20} />} title="Comfort total" value={format(finalBudget)} />
      </div>

      <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="flex items-end justify-between gap-4">
          <div><h3 className="text-xl font-bold text-slate-900">Where your money goes</h3><p className="mt-1 text-sm text-slate-500">Estimated for your destination and travel style.</p></div>
          <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700">INR estimate</span>
        </div>
        <div className="mt-6 space-y-5">
          {expenses.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title}>
                <div className="mb-2 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3"><div className="rounded-xl bg-sky-50 p-3 text-sky-700"><Icon size={18} /></div><span className="font-medium text-slate-700">{item.title}</span></div>
                  <span className="font-bold text-slate-900">{format(item.value)}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100"><div className="h-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-400" style={{ width: `${Math.max(8, (item.value / result.total) * 100)}%` }} /></div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6">
        <div className="flex items-center justify-between gap-4">
          <div><p className="text-sm uppercase tracking-[3px] text-slate-500">Estimate quality</p><h3 className="mt-2 text-3xl font-bold text-slate-900">{score}/100</h3></div>
          <div className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-bold text-white">{result.confidence === "destination-specific" ? "Destination aware" : "Regional guide"}</div>
        </div>
      </div>

      <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center gap-3"><div className="rounded-xl bg-slate-900 p-3 text-white"><Lightbulb size={18} /></div><h3 className="text-xl font-bold text-slate-900">Smart saving tips</h3></div>
        <div className="space-y-3 text-neutral-600"><p>✓ Compare neighbourhoods before choosing a hotel.</p><p>✓ Use local transport for short city journeys.</p><p>✓ Reserve high-demand attractions ahead of time.</p><p>✓ Keep an emergency reserve of roughly 10–15%.</p></div>
      </div>
    </div>
  );
}

function Card({ icon, title, value }) {
  return <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm"><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-700">{icon}</div><p className="text-sm text-neutral-500">{title}</p><h3 className="mt-2 text-2xl font-bold text-slate-900">{value}</h3></div>;
}
