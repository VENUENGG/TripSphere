import {
  Plane,
  Hotel,
  Utensils,
  Camera,
  ShoppingBag,
  Martini,
  MapPin,
  Sparkles,
  Car,
  Clock3,
  Wallet,
  CheckCircle2,
  Backpack,
  FileText,
  Shield,
  Lightbulb,
} from "lucide-react";

const icons = {
  Airport: Plane,
  Hotel: Hotel,
  Food: Utensils,
  Sightseeing: Camera,
  Shopping: ShoppingBag,
  Nightlife: Martini,
  Relaxation: Sparkles,
};

export default function JourneyTimeline({
  loading,
  itinerary,
}) {
  if (loading) {
    return (
      <section className="mt-20">

        <div className="rounded-[36px] border border-slate-200 bg-white p-16 text-center shadow-[0_30px_80px_rgba(15,23,42,.08)]">

          <div className="mx-auto flex h-24 w-24 animate-pulse items-center justify-center rounded-full bg-slate-900 text-white">
            <Sparkles size={40} />
          </div>

          <h2 className="mt-8 text-4xl font-black text-slate-900">
            Building Your Journey...
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-500">
            Our AI is preparing your itinerary,
            travel checklist,
            destination tips,
            documents
            and daily activities.
          </p>

        </div>

      </section>
    );
  }

  if (!itinerary) return null;

  return (
    <section className="mt-20">

      {/* HERO */}

      <div className="overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,.08)]">

        <div className="border-b border-slate-200 p-10">

          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-white">
            <Sparkles size={16} />
            AI Generated Journey
          </div>

          <h1 className="mt-6 text-5xl font-black text-slate-900">
            {itinerary.tripTitle}
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            {itinerary.summary}
          </p>

        </div>

      </div>

      {/* TRAVEL PREPARATION */}

      <div className="mt-14 grid gap-6 lg:grid-cols-3">

        <PrepCard
          icon={<Backpack size={22} />}
          title="Packing Checklist"
          items={[
            "Passport",
            "Power Bank",
            "Phone Charger",
            "Comfortable Shoes",
            "Reusable Water Bottle",
            "Travel Backpack",
          ]}
        />

        <PrepCard
          icon={<FileText size={22} />}
          title="Documents"
          items={[
            "Flight Ticket",
            "Hotel Booking",
            "Passport",
            "Visa (if required)",
            "Government ID",
            "Emergency Contacts",
          ]}
        />

        <PrepCard
          icon={<Shield size={22} />}
          title="Travel Essentials"
          items={[
            "Travel Adapter",
            "Luggage Lock",
            "Medicines",
            "Sanitizer",
            "Umbrella",
            "Sunglasses",
          ]}
        />

      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">

        <PrepCard
          icon={<Lightbulb size={22} />}
          title="AI Travel Tips"
          items={[
            "Download Offline Maps",
            "Keep Cash for Emergencies",
            "Carry Passport Copies",
            "Charge Devices Before Travel",
            "Reach Airport Early",
            "Save Hotel Address Offline",
          ]}
        />

        <PrepCard
          icon={<Sparkles size={22} />}
          title="Destination Advice"
          items={[
            "Respect Local Culture",
            "Stay Hydrated",
            "Use Public Transport",
            "Check Weather Daily",
            "Try Local Cuisine",
            "Keep Emergency Numbers Saved",
          ]}
        />

      </div>

      {/* TIMELINE */}

      <div className="mt-20 space-y-16">

        {itinerary.days.map((day) => (

          <div key={day.day}>

            <div className="mb-8 flex items-center gap-5">

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-2xl font-black text-white">
                {day.day}
              </div>

              <div>

                <p className="font-semibold uppercase tracking-[3px] text-slate-500">
                  Day {day.day}
                </p>

                <h2 className="text-4xl font-black text-slate-900">
                  {day.theme}
                </h2>

              </div>

            </div>

            <div className="relative ml-8 space-y-8 border-l-2 border-slate-200 pl-12">

              {day.activities.map((activity, index) => {

                const Icon =
                  icons[activity.category] || MapPin;

                return (

                  <div
                    key={index}
                    className="relative rounded-[30px] border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >

                    <div className="absolute -left-[61px] top-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-slate-900 text-white shadow-lg">
                      <Icon size={20} />
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4">

                      <div>

                        <h3 className="text-2xl font-black text-slate-900">
                          {activity.title}
                        </h3>

                        <p className="mt-3 leading-7 text-slate-600">
                          {activity.description}
                        </p>

                      </div>

                      <div className="rounded-2xl bg-slate-100 px-5 py-3 font-bold text-slate-900">
                        <Clock3 size={16} className="mr-2 inline" />
                        {activity.time}
                      </div>

                    </div>

                    <div className="mt-8 grid gap-4 md:grid-cols-3">

                      <InfoCard
                        icon={<MapPin size={18} />}
                        title="Location"
                        value={activity.location}
                      />

                      <InfoCard
                        icon={<Car size={18} />}
                        title="Transport"
                        value={activity.transport}
                      />

                      <InfoCard
                        icon={<Wallet size={18} />}
                        title="Estimated Cost"
                        value={activity.estimatedCost}
                      />

                    </div>

                  </div>

                );
              })}
                          </div>

          </div>

        ))}

      </div>

    </section>
  );
}

function InfoCard({
  icon,
  title,
  value,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

      <div className="mb-3 flex items-center gap-2 text-slate-500">
        {icon}
        <span className="text-sm font-semibold">
          {title}
        </span>
      </div>

      <h4 className="font-bold text-slate-900">
        {value}
      </h4>

    </div>
  );
}

function PrepCard({
  icon,
  title,
  items,
}) {
  return (

    <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <div className="rounded-2xl bg-slate-900 p-3 text-white">
          {icon}
        </div>

        <h3 className="text-xl font-black text-slate-900">
          {title}
        </h3>

      </div>

      <div className="space-y-3">

        {items.map((item) => (

          <div
            key={item}
            className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3"
          >

            <CheckCircle2
              size={18}
              className="text-emerald-500"
            />

            <span className="font-medium text-slate-700">
              {item}
            </span>

          </div>

        ))}

      </div>

    </div>

  );
}