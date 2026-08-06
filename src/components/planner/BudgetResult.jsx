export default function BudgetResult({ result }) {
  if (!result) return null;

  const format = (value) =>
    `₹${value.toLocaleString("en-IN")}`;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      <h2 className="mb-8 text-3xl font-bold">
        Trip Estimate
      </h2>

      <div className="space-y-4">
        <Row title="🏨 Hotel" value={format(result.hotel)} />
        <Row title="🍔 Food" value={format(result.food)} />
        <Row title="🚕 Transport" value={format(result.transport)} />
        <Row title="🎟 Activities" value={format(result.activities)} />
      </div>

      <div className="mt-8 border-t pt-6">
        <Row
          title="TOTAL"
          value={format(result.total)}
          bold
        />
      </div>
    </div>
  );
}

function Row({
  title,
  value,
  bold = false,
}) {
  return (
    <div className="flex justify-between">
      <span className={bold ? "font-bold" : ""}>
        {title}
      </span>

      <span className={bold ? "font-bold" : ""}>
        {value}
      </span>
    </div>
  );
}