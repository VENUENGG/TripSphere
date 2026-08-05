import { Menu, Plane } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="rounded-xl bg-blue-600 p-2 text-white">
            <Plane size={22} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              TripSphere
            </h1>
            <p className="text-xs text-slate-500">
              Travel Planner
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 md:flex">
          <a href="#" className="font-medium text-slate-600 hover:text-blue-600">
            Home
          </a>

          <a href="#" className="font-medium text-slate-600 hover:text-blue-600">
            Features
          </a>

          <a href="#" className="font-medium text-slate-600 hover:text-blue-600">
            Planner
          </a>

          <a href="#" className="font-medium text-slate-600 hover:text-blue-600">
            Dashboard
          </a>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:scale-105 hover:bg-blue-700">
            Start Planning
          </button>
        </div>

        {/* Mobile */}
        <button className="md:hidden">
          <Menu size={28} />
        </button>

      </div>
    </header>
  );
}