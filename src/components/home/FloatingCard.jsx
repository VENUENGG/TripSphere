import { motion } from "framer-motion";

export default function FloatingCard({
  icon,
  title,
  value,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -6, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className={`absolute z-20 ${className}`}
    >
      <div className="rounded-2xl border border-neutral-200 bg-white/95 px-5 py-4 shadow-[0_18px_45px_rgba(0,0,0,.08)] backdrop-blur-xl">

        <div className="flex items-center gap-4">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 text-black">
            {icon}
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
              {title}
            </p>

            <p className="mt-1 text-base font-bold tracking-tight text-black">
              {value}
            </p>
          </div>

        </div>

      </div>
    </motion.div>
  );
}