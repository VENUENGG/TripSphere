import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import { Sparkles } from "lucide-react";

export default function HeroContent() {
  return (
    <div>

      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">

        <Sparkles size={16} />

         Everything You Need for Smarter Trips

      </div>

      <h1 className="max-w-2xl text-4xl font-black leading-[1.05] text-slate-900 md:text-6xl">

        Everything You Need.

        <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">

          For Your Next Adventure.

        </span>

      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">

        TripSphere brings your itinerary, budget, transport and packing checklist
        together in one beautiful workspace—so you can spend less time planning and 
        more time exploring.

      </p>

      <div className="mt-10">
        <HeroButtons />
      </div>

      <div className="mt-14">
        <HeroStats />
      </div>

    </div>
  );
}