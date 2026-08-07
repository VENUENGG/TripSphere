export default function DestinationCard({
  destination,
  image,
  loading,
}) {
  if (loading) {
    return (
      <div className="rounded-3xl bg-white p-12 text-center shadow-2xl">
        <h2 className="text-xl font-semibold text-slate-600">
          Loading destination...
        </h2>
      </div>
    );
  }

  if (!destination) return null;

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">

      {/* Hero Image */}

      <div className="relative">

        <img
          src={image?.urls?.regular ?? destination.flags?.svg}
          alt={destination.name.common}
          className="h-[450px] w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-8 left-8">

          <h2 className="text-5xl font-black text-white">
            {destination.name.common}
          </h2>

          <p className="mt-2 text-xl text-white/90">
            {destination.capital?.[0]}
          </p>

        </div>

      </div>

      {/* Details */}

      <div className="grid gap-4 p-8 md:grid-cols-2">

        <Row
          title="🏛 Capital"
          value={destination.capital?.[0]}
        />

        <Row
          title="🌍 Region"
          value={destination.region}
        />

        <Row
          title="👥 Population"
          value={destination.population.toLocaleString()}
        />

        <Row
          title="💰 Currency"
          value={
            Object.values(destination.currencies || {})[0]?.name
          }
        />

        <Row
          title="🗣 Language"
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
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:shadow-md">

      <p className="text-sm font-medium text-slate-500">
        {title}
      </p>

      <p className="mt-2 text-lg font-bold text-slate-900">
        {value}
      </p>

    </div>
  );
}