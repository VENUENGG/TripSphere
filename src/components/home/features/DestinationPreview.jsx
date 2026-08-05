export default function DestinationPreview() {
  return (
    <div className="space-y-4">

      <div className="rounded-2xl bg-gradient-to-r from-sky-400 to-cyan-500 p-6 text-white">

        <p className="text-sm opacity-80">
          Popular Destination
        </p>

        <h4 className="mt-2 text-3xl font-bold">
          Goa
        </h4>

        <p className="mt-2">
          Beaches • Sunset • Food • Adventure
        </p>

      </div>

      <div className="grid grid-cols-3 gap-3">

        <div className="rounded-xl bg-slate-100 p-3 text-center">
          ⭐
          <div className="mt-1 font-semibold">4.9</div>
        </div>

        <div className="rounded-xl bg-slate-100 p-3 text-center">
          🏖️
          <div className="mt-1 font-semibold">Beach</div>
        </div>

        <div className="rounded-xl bg-slate-100 p-3 text-center">
          🍜
          <div className="mt-1 font-semibold">Food</div>
        </div>

      </div>

    </div>
  );
}