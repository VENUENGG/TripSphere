import { useState } from "react";

export default function BudgetForm({
  onCalculate,
}) {
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
      className="space-y-5 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg"
    >
      <input
        name="destination"
        placeholder="Destination"
        value={form.destination}
        onChange={handleChange}
        className="w-full rounded-xl border p-4"
      />

      <input
        type="number"
        name="days"
        value={form.days}
        onChange={handleChange}
        className="w-full rounded-xl border p-4"
      />

      <input
        type="number"
        name="travelers"
        value={form.travelers}
        onChange={handleChange}
        className="w-full rounded-xl border p-4"
      />

      <select
        name="travelStyle"
        value={form.travelStyle}
        onChange={handleChange}
        className="w-full rounded-xl border p-4"
      >
        <option value="budget">Budget</option>
        <option value="standard">Standard</option>
        <option value="luxury">Luxury</option>
      </select>

      <button
        className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white"
      >
        Calculate Budget
      </button>
    </form>
  );
}