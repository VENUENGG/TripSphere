import { useState } from "react";
import {
  MapPinned,
  Wallet,
  CalendarDays,
  Clock3,
  Sparkles,
  Plane,
  Heart,
  Users,
  User,
  Camera,
  Mountain,
  Utensils,
  Trees,
  ShoppingBag,
  MoonStar,
  Landmark,
  Waves,
} from "lucide-react";

import { useJourney } from "../../context/JourneyContext";

const travelWithOptions = [
  { name: "Solo", icon: <User size={18} /> },
  { name: "Couple", icon: <Heart size={18} /> },
  { name: "Friends", icon: <Users size={18} /> },
  { name: "Family", icon: <Users size={18} /> },
];

const tripTypes = [
  "Adventure",
  "Luxury",
  "Food",
  "Nature",
  "Nightlife",
  "Photography",
];

const interestOptions = [
  { name: "Local Food", icon: <Utensils size={18} /> },
  { name: "Shopping", icon: <ShoppingBag size={18} /> },
  { name: "Culture", icon: <Landmark size={18} /> },
  { name: "Beaches", icon: <Waves size={18} /> },
  { name: "Mountains", icon: <Mountain size={18} /> },
  { name: "Nightlife", icon: <MoonStar size={18} /> },
  { name: "Museums", icon: <Landmark size={18} /> },
  { name: "Hidden Gems", icon: <Sparkles size={18} /> },
  { name: "Photography", icon: <Camera size={18} /> },
  { name: "Relaxation", icon: <Trees size={18} /> },
];

export default function JourneyForm({ onGenerate }) {
  const { updateJourney } = useJourney();

  const [form, setForm] = useState({
    destination: "",
    travelWith: "",
    tripType: "",
    budget: "",
    days: "",
    arrivalTime: "",
    interests: [],
  });

  function handleChange(key, value) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function toggleInterest(item) {
    if (form.interests.includes(item)) {
      handleChange(
        "interests",
        form.interests.filter((i) => i !== item)
      );
    } else {
      handleChange("interests", [...form.interests, item]);
    }
  }

  function submit(e) {
    e.preventDefault();

    updateJourney(form);

    onGenerate(form);
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-[0_30px_80px_rgba(15,23,42,.08)]"
    >
      <div className="mb-10">

        <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-white">

          <Sparkles size={16} />

          AI Journey Planner

        </div>

        <h2 className="mt-6 text-5xl font-black text-slate-900">
          Plan Your
          <br />
          Perfect Journey
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Our AI creates a personalized itinerary including airport arrival,
          hotel suggestions, local food, sightseeing, hidden gems,
          transportation and nightlife.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <Input
          icon={<MapPinned size={18} />}
          placeholder="Destination"
          value={form.destination}
          onChange={(e) =>
            handleChange("destination", e.target.value)
          }
        />

        <Input
          icon={<Wallet size={18} />}
          placeholder="Budget ₹"
          value={form.budget}
          onChange={(e) =>
            handleChange("budget", e.target.value)
          }
        />

        <Input
          type="number"
          icon={<CalendarDays size={18} />}
          placeholder="Trip Days"
          value={form.days}
          onChange={(e) =>
            handleChange("days", e.target.value)
          }
        />

        <Input
          type="time"
          icon={<Clock3 size={18} />}
          value={form.arrivalTime}
          onChange={(e) =>
            handleChange("arrivalTime", e.target.value)
          }
        />

      </div>

      <Section title="Travelling With">

        <div className="grid gap-4 md:grid-cols-4">

          {travelWithOptions.map((item) => (

            <CardButton
              key={item.name}
              active={form.travelWith === item.name}
              onClick={() =>
                handleChange("travelWith", item.name)
              }
            >
              {item.icon}
              {item.name}
            </CardButton>

          ))}

        </div>

      </Section>

      <Section title="Trip Style">

        <div className="grid gap-4 md:grid-cols-3">

          {tripTypes.map((item) => (

            <CardButton
              key={item}
              active={form.tripType === item}
              onClick={() =>
                handleChange("tripType", item)
              }
            >
              <Plane size={18} />
              {item}
            </CardButton>

          ))}

        </div>

      </Section>

      <Section title="Your Interests">

        <div className="grid gap-4 md:grid-cols-3">

          {interestOptions.map((item) => (

            <CardButton
              key={item.name}
              active={form.interests.includes(item.name)}
              onClick={() =>
                toggleInterest(item.name)
              }
            >
              {item.icon}
              {item.name}
            </CardButton>

          ))}

        </div>

      </Section>

      <button
        type="submit"
        className="mt-12 w-full rounded-3xl bg-slate-900 py-5 text-xl font-bold text-white transition hover:-translate-y-1 hover:bg-slate-800"
      >
        ✨ Generate My AI Journey
      </button>

    </form>
  );
}

function Input({
  icon,
  ...props
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">

      <div className="text-slate-500">
        {icon}
      </div>

      <input
        {...props}
        className="w-full bg-transparent outline-none"
      />

    </div>
  );
}

function Section({
  title,
  children,
}) {
  return (
    <div className="mt-12">

      <h3 className="mb-5 text-2xl font-black text-slate-900">
        {title}
      </h3>

      {children}

    </div>
  );
}

function CardButton({
  active,
  children,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center gap-3 rounded-2xl border px-5 py-4 font-semibold transition ${
        active
          ? "border-slate-900 bg-slate-900 text-white shadow-lg"
          : "border-slate-200 bg-white hover:border-slate-400"
      }`}
    >
      {children}
    </button>
  );
}