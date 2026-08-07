import { Plane } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr_1fr]">

          {/* Brand */}
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 bg-black text-white shadow-sm">
                <Plane size={18} />
              </div>

              <div>
                <h3 className="text-xl font-semibold tracking-tight text-black">
                  TripSphere
                </h3>

                <p className="text-sm text-neutral-500">
                  Intelligent Travel Planning
                </p>
              </div>
            </div>

            <p className="mt-6 leading-7 text-neutral-600">
              Plan memorable journeys with beautifully organized itineraries,
              smart budgeting, destination discovery, and everything you need
              for stress-free travel—all in one elegant workspace.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-black">
              Explore
            </h4>

            <ul className="space-y-4 text-neutral-600">
              <li className="transition-colors hover:text-black cursor-pointer">
                Destination Explorer
              </li>
              <li className="transition-colors hover:text-black cursor-pointer">
                Budget Planner
              </li>
              <li className="transition-colors hover:text-black cursor-pointer">
                Packing Checklist
              </li>
              <li className="transition-colors hover:text-black cursor-pointer">
                Trip Timeline
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-black">
              Company
            </h4>

            <ul className="space-y-4 text-neutral-600">
              <li className="transition-colors hover:text-black cursor-pointer">
                About
              </li>
              <li className="transition-colors hover:text-black cursor-pointer">
                Features
              </li>
              <li className="transition-colors hover:text-black cursor-pointer">
                Contact
              </li>
              <li className="transition-colors hover:text-black cursor-pointer">
                Support
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 text-sm text-neutral-500 md:flex-row">
          <p>© 2026 TripSphere. All rights reserved.</p>

          <p>
            Crafted with precision for modern travelers.
          </p>
        </div>
      </div>
    </footer>
  );
}