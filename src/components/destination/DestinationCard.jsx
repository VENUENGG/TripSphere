export default function DestinationCard({ destination, image, loading }) {
  if (loading) {
    return (
      <div className="glass mt-12 rounded-[36px] border border-white/50 p-14 text-center shadow-[0_35px_90px_rgba(15,23,42,.12)]">
        <div className="mx-auto mb-6 h-14 w-14 animate-spin rounded-full border-4 border-sky-200 border-t-sky-600" />
        <h2 className="text-3xl font-black text-slate-900">Finding your destination...</h2>
        <p className="mt-3 text-slate-500">Fetching images, country details and travel information.</p>
      </div>
    );
  }

  if (!destination) return null;

  const currency = destination.currencies
    ? Object.values(destination.currencies)[0]?.name || "Local currency"
    : "Local currency";

  const languages = destination.languages
    ? Object.values(destination.languages).filter(Boolean).join(", ")
    : "";

  const languageLabel = languages || "Local language information unavailable";
  const population = destination.population ? destination.population.toLocaleString() : "Population unavailable";
  const name = destination.city || destination.name?.common || "Destination";

  return (
    <div className="glass mt-12 overflow-hidden rounded-[38px] border border-white/60 shadow-[0_40px_100px_rgba(15,23,42,.12)]">
      <div className="relative overflow-hidden">
        <img
          src={image?.urls?.regular || image?.urls?.small || "https://placehold.co/1600x900?text=Destination"}
          alt={name}
          className="h-[560px] w-full object-cover transition duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        <div className="absolute left-8 top-8 flex flex-wrap gap-3">
          <span className="rounded-full border border-white/20 bg-black/25 px-5 py-2 text-sm font-semibold text-white backdrop-blur-xl">
            📍 {destination.region || "Travel destination"}
          </span>
          <span className="rounded-full border border-white/20 bg-white/15 px-5 py-2 text-sm font-semibold text-white backdrop-blur-xl">
            ✦ Travel guide
          </span>
        </div>

        <div className="absolute bottom-10 left-10 right-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[4px] text-white/70">Discover</p>
            <h2 className="mt-2 text-5xl font-black tracking-tight text-white drop-shadow-lg md:text-6xl">{name}</h2>
            <p className="mt-3 text-xl text-white/90">{destination.capital?.[0] || destination.region || "Explore, stay and experience"}</p>
          </div>
          <div className="rounded-3xl border border-white/20 bg-white/15 px-5 py-4 text-white backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[2px] text-white/60">Language</p>
            <p className="mt-1 max-w-[260px] font-bold">{languageLabel}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-5 p-8 md:grid-cols-2 lg:grid-cols-3">
        <Row emoji="🏛" title="Capital" value={destination.capital?.[0] || "Not listed"} />
        <Row emoji="🌍" title="Region" value={destination.region || "Not listed"} />
        <Row emoji="👥" title="Population" value={population} />
        <Row emoji="💰" title="Currency" value={currency} />
        <Row emoji="🗣" title="Language" value={languageLabel} />
        <div className="rounded-[28px] bg-gradient-to-br from-sky-500 via-cyan-500 to-emerald-500 p-7 text-white shadow-xl">
          <p className="text-sm uppercase tracking-[3px] text-white/70">Trip idea</p>
          <h3 className="mt-4 text-2xl font-black">Travel deeper</h3>
          <p className="mt-4 leading-7 text-white/90">
            Mix iconic sights with local food, neighbourhood walks and one slower day. That usually makes a trip feel much more memorable.
          </p>
        </div>
      </div>
    </div>
  );
}

function Row({ emoji, title, value }) {
  return (
    <div className="hover-card rounded-[28px] border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-7">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-2xl">{emoji}</div>
      <p className="text-sm font-semibold uppercase tracking-[2px] text-slate-500">{title}</p>
      <h3 className="mt-3 break-words text-2xl font-black text-slate-900">{value}</h3>
    </div>
  );
}
