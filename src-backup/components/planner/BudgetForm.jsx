import { useState } from "react";
import {
  MapPinned,
  CalendarDays,
  Users,
  Crown,
} from "lucide-react";

export default function BudgetForm({ onCalculate }) {
  const [form, setForm] = useState({
    destination: "",
    days: 5,
    travelers: 2,
    travelStyle: "standard",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]:
        e.target.name === "days" ||
        e.target.name === "travelers"
          ? Number(e.target.value)
          : e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onCalculate(form);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-7"
    >
      {/* Destination */}

      <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">

        <label className="mb-3 flex items-center gap-2 font-semibold text-slate-700">

          <MapPinned
            size={18}
            className="text-black"
          />

          Destination

        </label>

        <input
          type="text"
          name="destination"
          placeholder="Goa, Bali, Dubai..."
          value={form.destination}
          onChange={handleChange}
          className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 text-lg font-medium text-black outline-none transition-all duration-300 focus:border-black focus:bg-white focus:ring-0"
        />

      </div>

      {/* Grid */}

      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">

          <label className="mb-3 flex items-center gap-2 font-semibold text-slate-700">

            <CalendarDays
              size={18}
              className="text-blue-600"
            />

            Days

          </label>

          <input
            type="number"
            name="days"
            min="1"
            value={form.days}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-lg outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />

        </div>

        <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">

          <label className="mb-3 flex items-center gap-2 font-semibold text-slate-700">

            <Users
              size={18}
              className="text-blue-600"
            />

            Travellers

          </label>

          <input
            type="number"
            min="1"
            name="travelers"
            value={form.travelers}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-lg outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />

        </div>

      </div>

      {/* Travel Style */}

      <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">

        <label className="mb-3 flex items-center gap-2 font-semibold text-slate-700">

          <Crown
            size={18}
            className="text-blue-600"
          />

          Travel Style

        </label>

        <select
          name="travelStyle"
          value={form.travelStyle}
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-lg outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
        >
          <option value="budget">💸 Budget</option>
          <option value="standard">✈️ Standard</option>
          <option value="luxury">👑 Luxury</option>
        </select>

      </div>

      {/* Button */}

      <button
        type="submit"
        className="mt-4 w-full rounded-2xl bg-black py-5 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,.18)]"
      >
        Generate Budget Report
        
      </button>

    </form>
  );
}