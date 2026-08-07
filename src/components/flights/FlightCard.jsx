export default function FlightCard({ flight }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl">

      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-2xl font-bold">
            {flight.airline}
          </h3>

          <p className="text-slate-500">
            {flight.from} → {flight.to}
          </p>

        </div>

        <h2 className="text-3xl font-black text-blue-600">
          ₹{flight.price}
        </h2>

      </div>

      <div className="mt-6 flex justify-between text-slate-600">

        <span>🛫 {flight.departure}</span>

        <span>⏱ {flight.duration}</span>

        <span>{flight.stops}</span>

      </div>

    </div>
  );
}