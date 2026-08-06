import { useEffect, useState } from "react";
import { Menu, X, Plane } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { title: "Home", href: "#home" },
  { title: "Features", href: "#features" },
  { title: "Planner", href: "#planner" },
  { title: "Contact", href: "#cta" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();

    setMobileOpen(false);

    const element = document.querySelector(href);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/80 shadow-lg backdrop-blur-xl"
          : "bg-white/40 backdrop-blur-lg"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          className="flex items-center gap-3"
        >
          <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-3 text-white shadow-lg">
            <Plane size={22} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              TripSphere
            </h2>

            <p className="text-xs tracking-wide text-slate-500">
              Travel Planner
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="group relative font-medium text-slate-600 transition hover:text-blue-600"
            >
              {link.title}

              <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA */}

        <motion.a
          href="#planner"
          onClick={(e) => scrollToSection(e, "#planner")}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="hidden rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg transition md:block"
        >
          Start Planning
        </motion.a>

        {/* Mobile Button */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-xl p-2 transition hover:bg-slate-100 md:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-slate-200 bg-white md:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-6">
              {links.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}