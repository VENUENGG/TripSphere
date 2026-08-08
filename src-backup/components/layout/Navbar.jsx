import { useState } from "react";
import {
  Compass,
  LayoutDashboard,
  Map,
  Plane,
  Wallet,
  Sparkles,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  {
    title: "Dashboard",
    href: "#workspace",
    icon: LayoutDashboard,
  },
  {
    title: "Explore",
    href: "#workspace",
    icon: Map,
  },
  {
    title: "Flights",
    href: "#workspace",
    icon: Plane,
  },
  {
    title: "Budget",
    href: "#workspace",
    icon: Wallet,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const go = (e, href) => {
    e.preventDefault();

    setOpen(false);

    const el = document.querySelector(href);

    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="fixed inset-x-0 top-5 z-50 px-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-neutral-200 bg-white/85 px-6 py-4 shadow-[0_15px_50px_rgba(0,0,0,.06)] backdrop-blur-xl">

        {/* Logo */}

        <a
          href="#home"
          onClick={(e) => go(e, "#home")}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white">
            <Compass size={19} />
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-black">
              TripSphere
            </h2>

            <p className="text-xs tracking-[3px] uppercase text-neutral-500">
              Plan • Explore • Experience
            </p>
          </div>
        </a>

        {/* Desktop */}

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                onClick={(e) => go(e, item.href)}
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-neutral-600 transition hover:bg-neutral-100 hover:text-black"
              >
                <Icon size={16} />

                {item.title}
              </a>
            );
          })}
        </nav>

        {/* CTA */}

        <a
          href="#workspace"
          onClick={(e) => go(e, "#workspace")}
          className="hidden items-center gap-2 rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.03] lg:flex"
        >
          <Sparkles size={16} />
          Plan My Journey →
        </a>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-3 max-w-7xl rounded-2xl border border-neutral-200 bg-white p-5 shadow-xl lg:hidden"
          >
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={(e) => go(e, item.href)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100"
                  >
                    <Icon size={18} />
                    {item.title}
                  </a>
                );
              })}

              <a
                href="#workspace"
                onClick={(e) => go(e, "#workspace")}
                className="mt-3 flex items-center justify-center rounded-xl bg-black py-3 font-semibold text-white"
              >
                Plan My Journey →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}