import { Search } from "lucide-react";

export default function SearchBar({
  value,
  onChange,
  onSearch,
}) {
  return (
    <div className="flex gap-4">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search destination..."
        className="flex-1 rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-blue-500"
      />

      <button
        onClick={onSearch}
        className="flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
      >
        <Search size={18} />
        Search
      </button>
    </div>
  );
}