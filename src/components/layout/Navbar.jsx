import { useEffect, useState } from "react";
import { Menu, X, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { title: "Features", href: "#features" },
  { title: "Planner", href: "#planner" },
  { title: "Explore", href: "#destination" },
  { title: "AI Journey", href: "#journey" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  function scrollToSection(e, href) {
    e.preventDefault();
    setMobileOpen(false);

    const el = document.querySelector(href);

    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <header
      className={`fixed inset-x-0 top-5 z-50 transition-all duration-500`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-7 py-4 transition-all duration-500 ${
          scrolled
            ? "border-slate-200 bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,.08)] backdrop-blur-xl"
            : "border-white/70 bg-white/70 backdrop-blur-xl"
        }`}
      >
        {/* Logo */}

        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          className="flex items-center gap-4"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">

            <Compass size={22} />

          </div>

          <div>

            <h1 className="text-2xl font-black tracking-tight text-slate-900">
              TripSphere
            </h1>

            <p className="-mt-1 text-xs uppercase tracking-[4px] text-slate-500">
              Premium Travel
            </p>

          </div>
        </a>

        {/* Desktop */}

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((item) => (
            <a
              key={item.title}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="relative text-[15px] font-semibold text-slate-600 transition hover:text-slate-900"
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* CTA */}

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: .97 }}
          href="#planner"
          onClick={(e) => scrollToSection(e, "#planner")}
          className="hidden rounded-2xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-black md:block"
        >
          Start Planning
        </motion.a>

        {/* Mobile */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>

        {mobileOpen && (

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="mx-auto mt-3 max-w-7xl rounded-2xl border border-slate-200 bg-white p-5 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-4">

              {links.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="rounded-xl p-3 font-semibold text-slate-700 hover:bg-slate-100"
                >
                  {item.title}
                </a>
              ))}

            </div>
          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}