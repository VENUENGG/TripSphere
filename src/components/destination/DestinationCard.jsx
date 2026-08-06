export default function DestinationCard({ destination }) {
  if (!destination) return null;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

      <img
        src={destination.flags.svg}
        alt={destination.name.common}
        className="mb-6 h-44 w-full rounded-2xl object-cover"
      />

      <h2 className="text-3xl font-bold">
        {destination.name.common}
      </h2>

      <div className="mt-8 space-y-4">

        <Row
          title="Capital"
          value={destination.capital?.[0]}
        />

        <Row
          title="Region"
          value={destination.region}
        />

        <Row
          title="Population"
          value={destination.population.toLocaleString()}
        />

        <Row
          title="Currency"
          value={
            Object.values(destination.currencies || {})[0]?.name
          }
        />

        <Row
          title="Language"
          value={
            Object.values(destination.languages || {}).join(", ")
          }
        />

      </div>

    </div>
  );
}

function Row({ title, value }) {
  return (
    <div className="flex justify-between border-b pb-3">
      <span className="font-medium">
        {title}
      </span>

      <span>
        {value}
      </span>
    </div>
  );
}