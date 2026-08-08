import { motion } from "framer-motion";
import HeroContent from "./HeroContent";

const heroImage =
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85";

const phoneImages = [
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=85",
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#f6f3ee]">
      <div className="absolute inset-0 -z-20 bg-[#f6f3ee]" />

      <div
        className="absolute inset-x-0 top-0 -z-10 h-[780px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-[#f6f3ee]" />
      </div>

      <div className="absolute left-[-12%] top-[35%] -z-10 h-[420px] w-[420px] rounded-full bg-amber-200/30 blur-[120px]" />
      <div className="absolute right-[-10%] top-[20%] -z-10 h-[460px] w-[460px] rounded-full bg-sky-200/30 blur-[130px]" />

      <div className="mx-auto grid min-h-[900px] max-w-7xl items-center gap-16 px-5 pb-20 pt-36 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <HeroContent />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 70, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[500px]"
        >
          <div className="absolute -inset-8 rounded-[50px] bg-white/20 blur-3xl" />

          <div className="relative rounded-[42px] border border-white/60 bg-white/15 p-3 shadow-[0_45px_120px_rgba(0,0,0,.28)] backdrop-blur-md">
            <div className="relative overflow-hidden rounded-[34px] bg-black p-2 shadow-2xl">
              <div className="relative h-[520px] overflow-hidden rounded-[28px] bg-neutral-900">
                {phoneImages.map((image, index) => (
                  <motion.img
                    key={image}
                    src={image}
                    alt="Travel destination"
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: [0, 1, 1, 0], scale: [1.08, 1, 1.02, 1.06] }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      delay: index * 4,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/65" />

                <div className="absolute left-5 right-5 top-5 flex items-center justify-between rounded-2xl bg-black/25 px-4 py-3 text-white backdrop-blur-md">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[3px] text-white/70">
                      Your next chapter
                    </p>
                    <p className="mt-1 text-lg font-black">Travel beautifully.</p>
                  </div>
                  <div className="h-9 w-9 rounded-full border border-white/40 bg-white/20" />
                </div>

                <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-white/90 p-5 text-neutral-900 shadow-2xl backdrop-blur-xl">
                  <p className="text-xs font-bold uppercase tracking-[2px] text-neutral-500">TripSphere</p>
                  <div className="mt-2 flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-black">Plan. Explore. Experience.</h3>
                      <p className="mt-1 text-sm text-neutral-600">A complete journey, one place.</p>
                    </div>
                    <span className="rounded-full bg-black px-3 py-2 text-xs font-bold text-white">AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0], rotate: [-2, -1, -2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-8 bottom-14 hidden rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block"
          >
            <p className="text-xs font-bold uppercase tracking-[2px] text-neutral-400">Route ready</p>
            <p className="mt-1 text-sm font-black text-neutral-900">Hotel → places → next stop</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0], rotate: [2, 1, 2] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-7 top-20 hidden rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block"
          >
            <p className="text-xs font-bold uppercase tracking-[2px] text-neutral-400">One workspace</p>
            <p className="mt-1 text-sm font-black text-neutral-900">Map + budget + itinerary</p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="flex h-12 w-7 justify-center rounded-full border border-white/60"
        >
          <div className="mt-2 h-2.5 w-2.5 rounded-full bg-white" />
        </motion.div>
      </div>
    </section>
  );
}
