import { Plane } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-40 border-t border-slate-200 bg-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-blue-600 p-3 text-white">
                <Plane size={22} />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  TripSphere
                </h3>

                <p className="text-slate-500">
                  Travel Planner
                </p>
              </div>

            </div>

            <p className="mt-6 text-slate-600 leading-7">
              Organize destinations, budgets,
              itineraries and unforgettable journeys
              in one beautiful workspace.
            </p>

          </div>

          {/* Product */}

          <div>

            <h4 className="mb-5 font-bold">
              Product
            </h4>

            <div className="space-y-3 text-slate-600">

              <p>Destination Explorer</p>
              <p>Budget Planner</p>
              <p>Packing Checklist</p>
              <p>Trip Timeline</p>

            </div>

          </div>

          {/* Company */}

          <div>

            <h4 className="mb-5 font-bold">
              Company
            </h4>

            <div className="space-y-3 text-slate-600">

              <p>About</p>
              <p>Features</p>
              <p>Contact</p>
              <p>Support</p>

            </div>

          </div>

          {/* Social */}

          <div>

            <h4 className="mb-5 font-bold">
              Connect
            </h4>

            <div className="flex gap-4">

  <button className="rounded-xl bg-slate-100 px-5 py-3 transition hover:bg-blue-600 hover:text-white">
    Instagram
  </button>

  <button className="rounded-xl bg-slate-100 px-5 py-3 transition hover:bg-blue-600 hover:text-white">
    LinkedIn
  </button>

</div>

          </div>

        </div>

        <div className="mt-16 border-t border-slate-200 pt-8 text-center text-slate-500">

          © 2026 TripSphere • Built for Hackathon 🚀

        </div>

      </div>

    </footer>
  );
}