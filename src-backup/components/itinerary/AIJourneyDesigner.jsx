import { Sparkles, Bot, Wand2 } from "lucide-react";
import { motion } from "framer-motion";

import JourneyForm from "./JourneyForm";
import JourneyTimeline from "./JourneyTimeline";
import useJourneyAI from "../../hooks/useJourneyAI";

export default function AIJourneyDesigner() {
  const {
    loading,
    itinerary,
    generateJourney,
  } = useJourneyAI();

  return (
    <section 
     id="journey"
    className="relative mx-auto mt-40 max-w-7xl px-6">

      {/* Background */}

      <div className="absolute left-0 top-0 -z-10 h-80 w-80 rounded-full bg-slate-200/40 blur-[120px]" />
      <div className="absolute right-0 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-100/30 blur-[120px]" />

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
        className="mb-20 text-center"
      >

        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 shadow-sm">

          <Bot
            size={18}
            className="text-slate-900"
          />

          <span className="font-semibold text-slate-700">
            Powered by Gemini AI
          </span>

        </div>

        <h2 className="mt-8 text-6xl font-black leading-tight tracking-tight text-slate-900">

          Your Personal
          <br />

          AI Travel Planner

        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">

          Tell us where you're going, your budget, travel style and interests.

          Our AI creates a complete luxury itinerary including airports,
          hotels, restaurants, hidden gems, sightseeing,
          nightlife and transportation.

        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Badge text="Hotels" />

          <Badge text="Restaurants" />

          <Badge text="Hidden Gems" />

          <Badge text="Nightlife" />

          <Badge text="Transport" />

          <Badge text="AI Optimized" />

        </div>

      </motion.div>

      {/* Form */}

      <JourneyForm
        onGenerate={generateJourney}
      />

      {/* Timeline */}

      <JourneyTimeline
        loading={loading}
        itinerary={itinerary}
      />

    </section>
  );
}

function Badge({ text }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm">

      <Sparkles
        size={15}
        className="text-blue-600"
      />

      <span className="font-medium text-slate-700">
        {text}
      </span>

    </div>
  );
}