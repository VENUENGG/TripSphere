export default function DestinationCard({
  destination,
  image,
  loading,
}) {
  if (loading) {
    return (
      <div className="glass mt-12 rounded-[36px] border border-white/50 p-14 text-center shadow-[0_35px_90px_rgba(15,23,42,.12)]">
        <div className="mx-auto mb-6 h-14 w-14 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />
        <h2 className="text-3xl font-black text-slate-900">
          Finding your destination...
        </h2>
        <p className="mt-3 text-slate-500">
          Fetching images, country details and travel information.
        </p>
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
    <div className="glass mt-12 overflow-hidden rounded-[38px] border border-white/50 shadow-[0_40px_100px_rgba(15,23,42,.12)]">

      {/* Hero */}

      <div className="relative overflow-hidden">

        <img
          src={
            image?.urls?.regular ||
            image?.urls?.small ||
            "https://placehold.co/1600x900?text=Destination"
          }
          alt={destination.city || destination.name.common}
          className="h-[560px] w-full object-cover transition duration-700 hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />

        {/* Floating Chips */}

        <div className="absolute left-8 top-8 flex flex-wrap gap-3">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur-xl">
            📍 {destination.region || "Unknown"}
          </span>

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur-xl">
            🌎 Travel Ready
          </span>

        </div>

        {/* Bottom */}

        <div className="absolute bottom-10 left-10">

          <h2 className="text-6xl font-black tracking-tight text-white drop-shadow-lg">
            {destination.city || destination.name.common}
          </h2>

          <p className="mt-3 text-xl text-white/90">
            {destination.capital?.[0] || destination.region}
          </p>

        </div>

      </div>

      {/* Info */}

      <div className="grid gap-6 p-10 lg:grid-cols-3">

        <Row
          emoji="🏛"
          title="Capital"
          value={destination.capital?.[0] || "Unknown"}
        />

        <Row
          emoji="🌍"
          title="Region"
          value={destination.region || "Unknown"}
        />

        <Row
          emoji="👥"
          title="Population"
          value={population}
        />

        <Row
          emoji="💰"
          title="Currency"
          value={currency}
        />

        <Row
          emoji="🗣"
          title="Language"
          value={language}
        />

        <div className="rounded-[28px] bg-gradient-to-br from-blue-600 via-cyan-500 to-indigo-600 p-7 text-white shadow-xl">

          <p className="text-sm uppercase tracking-[3px] text-white/70">
            Travel Tip
          </p>

          <h3 className="mt-4 text-2xl font-black">
            Best Time To Visit
          </h3>

          <p className="mt-4 text-white/90">
            Plan your trip during the local peak season for the best weather,
            attractions and unforgettable experiences.
          </p>

        </div>

      </div>

    </div>
  );
}

function Row({ emoji, title, value }) {
  return (
    <div className="hover-card rounded-[28px] border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-7">

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
        {emoji}
      </div>

      <p className="text-sm font-semibold uppercase tracking-[2px] text-slate-500">
        {title}
      </p>

      <h3 className="mt-3 text-2xl font-black text-slate-900">
        {value}
      </h3>

    </div>
  );
}