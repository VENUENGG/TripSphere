export default function DestinationCard({
  destination,
  image,
  loading,
}) {
  if (loading) {
    return (
      <div className="mt-12 rounded-3xl bg-white p-10 text-center shadow-xl">
        <h2 className="text-2xl font-bold">Loading destination...</h2>
      </div>
    );
  }

  if (!destination) return null;

  const currency =
    destination.currencies
      ? Object.values(destination.currencies)[0]?.name
      : "Unknown";

  const language =
    destination.languages
      ? Object.values(destination.languages).join(", ")
      : "Unknown";

  const population =
    destination.population
      ? destination.population.toLocaleString()
      : "Unknown";

  return (
    <div className="mt-12 overflow-hidden rounded-3xl bg-white shadow-2xl">

      {/* Hero Image */}
      <div className="relative">

        <img
          src={
            image?.urls?.regular ||
            image?.urls?.small ||
            "https://placehold.co/1200x700?text=Destination"
          }
          alt={destination.city || destination.name.common}
          className="h-[450px] w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-8 left-8">
          <h2 className="text-5xl font-black text-white">
            {destination.city || destination.name.common}
          </h2>

          <p className="mt-2 text-xl text-white">
            {destination.region || "Unknown"}
          </p>
        </div>

      </div>

      {/* Details */}

      <div className="grid gap-6 p-8 md:grid-cols-2">

        <Row
          title="🏛 Capital"
          value={destination.capital?.[0] || "Unknown"}
        />

        <Row
          title="🌍 Region"
          value={destination.region || "Unknown"}
        />

        <Row
          title="👥 Population"
          value={population}
        />

        <Row
          title="💰 Currency"
          value={currency}
        />

        <Row
          title="🗣 Language"
          value={language}
        />

      </div>

    </div>
  );
}

function Row({ title, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5">

      <p className="text-sm font-semibold text-slate-500">
        {title}
      </p>

      <p className="mt-2 text-xl font-bold text-slate-900">
        {value}
      </p>

    </div>
  );
}