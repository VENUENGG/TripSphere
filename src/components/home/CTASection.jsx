import { motion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  Plane,
  MapPinned,
  Luggage,
} from "lucide-react";

export default function CTASection() {
  return (
    <section id="cta" className="relative mx-auto mt-40 max-w-7xl px-6">

      {/* Background */}

      <div className="relative overflow-hidden rounded-[40px] border border-white/40 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 p-16 shadow-[0_30px_80px_rgba(37,99,235,0.35)]">

        {/* Glow */}

        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

        {/* Floating Icons */}

        <Plane
          className="absolute left-12 top-12 text-white/20"
          size={70}
        />

        <Compass
          className="absolute right-16 top-16 text-white/20"
          size={70}
        />

        <MapPinned
          className="absolute bottom-10 left-24 text-white/20"
          size={60}
        />

        <Luggage
          className="absolute bottom-12 right-20 text-white/20"
          size={60}
        />

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center"
        >

          <p className="font-semibold uppercase tracking-[4px] text-white/80">
            Start Your Journey
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-black leading-tight text-white">

            Ready For Your
            <br />
            Next Adventure?

          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/80">

            Organize destinations, budgets, transport,
            packing and itineraries in one beautiful workspace.

          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <button className="group flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:scale-105">

              Start Planning

              <ArrowRight
                className="transition group-hover:translate-x-1"
                size={20}
              />

            </button>

            <button className="rounded-2xl border border-white/40 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-lg transition hover:bg-white/20">

              Explore Features

            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}