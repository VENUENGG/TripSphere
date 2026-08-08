import {
  Plane,
  Hotel,
  Utensils,
  Camera,
  ShoppingBag,
  Martini,
  MapPin,
  Sparkles,
  Car,
  Clock3,
  Wallet,
  CheckCircle2,
  Backpack,
  FileText,
  Shield,
  Lightbulb,
  Bus,
  TrainFront,
  Bike,
  Users,
  Route,
} from "lucide-react";

import { useEffect, useMemo, useState } from "react";

import JourneyMap from "./JourneyMap";
import { geocodeStops } from "../../services/geocodingService";

const icons = {
  Airport: Plane,
  Hotel: Hotel,
  Food: Utensils,
  Sightseeing: Camera,
  Shopping: ShoppingBag,
  Nightlife: Martini,
  Relaxation: Sparkles,
};

const transportIcons = {
  Car: Car,
  "Shared Taxi": Users,
  Bus: Bus,
  Train: TrainFront,
  Bike: Bike,
};

export default function JourneyTimeline({
  loading,
  itinerary,
}) {
  const [mapStops, setMapStops] = useState([]);
  const [mapLoading, setMapLoading] = useState(false);
  
    useEffect(() => {
    if (!loading && itinerary) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [loading, itinerary]); 

  /*
   * Build the map route from:
   *
   * 1. AI route stops
   * 2. Every useful location inside every daily activity
   *
   * This means the map can become:
   *
   * Airport
   *   ↓
   * Hotel
   *   ↓
   * Fort
   *   ↓
   * Beach
   *   ↓
   * Restaurant
   *   ↓
   * Market
   *
   * instead of only:
   *
   * Start → Destination
   */

  const itineraryMapStops = useMemo(() => {
    if (!itinerary) return [];

    const collectedStops = [];

    /*
     * First add explicit AI route stops.
     */

    if (Array.isArray(itinerary.route?.stops)) {
      itinerary.route.stops.forEach((stop) => {
        if (!stop?.name) return;

        collectedStops.push({
          name: stop.name.trim(),
          description: stop.description || "",
          source: "route",
        });
      });
    }

    /*
     * Then add every activity location in chronological order.
     */

    if (Array.isArray(itinerary.days)) {
      itinerary.days.forEach((day) => {
        if (!Array.isArray(day.activities)) return;

        day.activities.forEach((activity) => {
          if (!activity?.location) return;

          const location = activity.location.trim();

          if (!location) return;

          collectedStops.push({
            name: location,
            description: activity.title || "",
            source: "activity",
            day: day.day,
            activityTitle: activity.title || "",
            category: activity.category || "",
          });
        });
      });
    }

    /*
     * Remove duplicate locations while keeping their
     * original itinerary order.
     */

    const seen = new Set();

    return collectedStops.filter((stop) => {
      const normalized = stop.name
        .toLowerCase()
        .replace(/\s+/g, " ")
        .trim();

      if (!normalized || seen.has(normalized)) {
        return false;
      }

      seen.add(normalized);

      return true;
    });
  }, [itinerary]);

  /*
   * Geocode every meaningful itinerary location.
   */

  useEffect(() => {
    let cancelled = false;

    async function prepareMap() {
      if (!itineraryMapStops.length) {
        setMapStops([]);
        return;
      }

      setMapLoading(true);

      try {
       const stops = await geocodeStops(
  itineraryMapStops,
  itinerary.destination
);
        if (!cancelled) {
          setMapStops(stops);
        }
      } catch (error) {
        console.error("Journey map error:", error);

        if (!cancelled) {
          setMapStops([]);
        }
      } finally {
        if (!cancelled) {
          setMapLoading(false);
        }
      }
    }

    prepareMap();

    return () => {
      cancelled = true;
    };
  }, [itineraryMapStops]);

  if (loading) {
    return (
      <section className="mt-10">
        <div className="rounded-[36px] border border-slate-200 bg-white p-16 text-center shadow-[0_30px_80px_rgba(15,23,42,.08)]">
          <div className="mx-auto flex h-24 w-24 animate-pulse items-center justify-center rounded-full bg-slate-900 text-white">
            <Sparkles size={40} />
          </div>

          <h2 className="mt-8 text-4xl font-black text-slate-900">
            Building Your Journey...
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-500">
            Our AI is preparing your itinerary, route, travel options,
            destination tips, documents and daily activities.
          </p>
        </div>
      </section>
    );
  }

  if (!itinerary) return null;

  return (
    <section className="mt-10">

      {/* HERO */}

      <div className="overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,.08)]">
        <div className="border-b border-slate-200 p-10">

          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-white">
            <Sparkles size={16} />
            AI Generated Journey
          </div>

          <h1 className="mt-6 text-5xl font-black text-slate-900">
            {itinerary.tripTitle}
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            {itinerary.summary}
          </p>

        </div>
      </div>


      {/* COMPLETE JOURNEY MAP */}

      {itineraryMapStops.length > 0 && (
        <div className="mt-14">

          <div className="mb-7">

            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
              <Route size={16} />

              <span className="text-sm font-bold text-slate-700">
                Your Journey
              </span>
            </div>

            <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

              <div>

                <h2 className="text-4xl font-black text-slate-900">
                  Your Route
                </h2>

                <p className="mt-3 max-w-3xl text-lg leading-7 text-slate-600">
                  Follow your complete journey from your starting point
                  through hotels, attractions, restaurants and other
                  important stops.
                </p>

              </div>

              <div className="shrink-0 rounded-2xl bg-slate-100 px-5 py-3 text-sm font-bold text-slate-700">
                {mapStops.length || itineraryMapStops.length} stops
              </div>

            </div>

          </div>


          {/* MAP */}

          {mapLoading ? (
            <div className="flex h-[520px] items-center justify-center rounded-[32px] border border-slate-200 bg-slate-50">

              <div className="text-center">

                <div className="mx-auto flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-blue-600 text-white">
                  <MapPin size={28} />
                </div>

                <h3 className="mt-5 text-xl font-black text-slate-900">
                  Building Your Journey Map...
                </h3>

                <p className="mt-2 text-slate-500">
                  Locating every stop in your itinerary.
                </p>

              </div>

            </div>
          ) : mapStops.length >= 2 ? (
            <JourneyMap stops={mapStops} />
          ) : (
            <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-10 text-center">

              <MapPin
                size={32}
                className="mx-auto text-slate-400"
              />

              <h3 className="mt-4 text-xl font-black text-slate-900">
                We couldn't map all the locations
              </h3>

              <p className="mx-auto mt-2 max-w-xl text-slate-500">
                Some itinerary locations could not be located accurately.
                Your complete day-by-day itinerary is still available below.
              </p>

            </div>
          )}


          {/* MAP STOP LIST */}

          {mapStops.length > 0 && (
            <div className="mt-6 overflow-hidden rounded-[28px] border border-slate-200 bg-white">

              <div className="border-b border-slate-200 px-6 py-5">

                <h3 className="text-xl font-black text-slate-900">
                  Journey Stops
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Your itinerary in travel order
                </p>

              </div>

              <div className="overflow-x-auto">

                <div className="flex min-w-max items-center gap-0 p-6">

                  {mapStops.map((stop, index) => (

                    <div
                      key={`${stop.name}-${index}`}
                      className="flex items-center"
                    >

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white shadow-sm">
                          {index + 1}
                        </div>

                        <div className="max-w-[180px]">

                          <p className="truncate font-bold text-slate-900">
                            {stop.name}
                          </p>

                          {stop.day && (
                            <p className="mt-1 text-xs font-medium text-slate-400">
                              Day {stop.day}
                            </p>
                          )}

                        </div>

                      </div>

                      {index < mapStops.length - 1 && (
                        <div className="mx-4 h-[2px] w-10 bg-blue-200" />
                      )}

                    </div>

                  ))}

                </div>

              </div>

            </div>
          )}

        </div>
      )}


      {/* ROUTE LEGS + TRANSPORT */}

      {itinerary.routeLegs?.length > 0 && (
        <div className="mt-14">

          <div className="mb-7">

            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
              <Car size={16} />

              <span className="text-sm font-bold text-slate-700">
                Estimated Transport
              </span>
            </div>

            <h2 className="mt-4 text-4xl font-black text-slate-900">
              Getting Around
            </h2>

            <p className="mt-3 max-w-3xl text-lg leading-7 text-slate-600">
              Compare estimated transportation costs between major
              parts of your journey. These are planning estimates,
              not live prices.
            </p>

          </div>


          <div className="space-y-8">

            {itinerary.routeLegs.map((leg, index) => (

              <RouteLegCard
                key={`${leg.from}-${leg.to}-${index}`}
                leg={leg}
              />

            ))}

          </div>

        </div>
      )}


      {/* TRAVEL PREPARATION */}

      <div className="mt-16">

        <div className="mb-7">

          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
            <Backpack size={16} />

            <span className="text-sm font-bold text-slate-700">
              Travel Preparation
            </span>
          </div>

          <h2 className="mt-4 text-4xl font-black text-slate-900">
            Everything You Need
          </h2>

        </div>


        <div className="grid gap-6 lg:grid-cols-3">

          <PrepCard
            icon={<Backpack size={22} />}
            title="Packing Checklist"
            items={
              itinerary.packingChecklist?.length
                ? itinerary.packingChecklist
                : [
                    "Passport",
                    "Power Bank",
                    "Phone Charger",
                    "Comfortable Shoes",
                    "Reusable Water Bottle",
                    "Travel Backpack",
                  ]
            }
          />

          <PrepCard
            icon={<FileText size={22} />}
            title="Documents"
            items={
              itinerary.documents?.length
                ? itinerary.documents
                : [
                    "Flight Ticket",
                    "Hotel Booking",
                    "Passport",
                    "Visa if required",
                    "Government ID",
                    "Emergency Contacts",
                  ]
            }
          />

          <PrepCard
            icon={<Shield size={22} />}
            title="Travel Essentials"
            items={
              itinerary.travelEssentials?.length
                ? itinerary.travelEssentials
                : [
                    "Travel Adapter",
                    "Luggage Lock",
                    "Medicines",
                    "Sanitizer",
                    "Umbrella",
                    "Sunglasses",
                  ]
            }
          />

        </div>


        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          <PrepCard
            icon={<Lightbulb size={22} />}
            title="AI Travel Tips"
            items={
              itinerary.weatherAdvice?.length
                ? itinerary.weatherAdvice
                : [
                    "Check the weather before leaving",
                    "Carry appropriate clothing",
                    "Stay hydrated",
                    "Keep important documents safe",
                  ]
            }
          />

          <PrepCard
            icon={<Sparkles size={22} />}
            title="Destination Advice"
            items={
              itinerary.destinationAdvice?.length
                ? itinerary.destinationAdvice
                : [
                    "Respect local culture",
                    "Try local cuisine",
                    "Keep emergency numbers saved",
                    "Check local transport options",
                  ]
            }
          />

        </div>


        <div className="mt-8 grid gap-6 lg:grid-cols-3">

          <PrepCard
            icon={<Sparkles size={22} />}
            title="Local Apps"
            items={
              itinerary.localApps?.length
                ? itinerary.localApps
                : [
                    "Maps",
                    "Transport App",
                    "Food Delivery",
                  ]
            }
          />

          <PrepCard
            icon={<Wallet size={22} />}
            title="Currency Tips"
            items={
              itinerary.currencyTips?.length
                ? itinerary.currencyTips
                : [
                    "Carry some local cash",
                    "Keep an emergency amount separate",
                    "Check exchange rates before converting",
                  ]
            }
          />

          <PrepCard
            icon={<Shield size={22} />}
            title="Emergency Information"
            items={
              itinerary.emergencyNumbers?.length
                ? itinerary.emergencyNumbers
                : [
                    "Save local emergency contacts",
                    "Keep hotel contact information",
                    "Keep copies of important documents",
                  ]
            }
          />

        </div>

      </div>


      {/* DAILY ITINERARY */}

      <div className="mt-20">

        <div className="mb-10">

          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
            <Camera size={16} />

            <span className="text-sm font-bold text-slate-700">
              Daily Experience
            </span>
          </div>

          <h2 className="mt-4 text-4xl font-black text-slate-900">
            Your Day-by-Day Journey
          </h2>

        </div>


        <div className="space-y-16">

          {itinerary.days?.map((day) => (

            <div key={day.day}>

              <div className="mb-8 flex items-center gap-5">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-2xl font-black text-white">
                  {day.day}
                </div>

                <div>

                  <p className="font-semibold uppercase tracking-[3px] text-slate-500">
                    Day {day.day}
                  </p>

                  <h2 className="text-4xl font-black text-slate-900">
                    {day.theme}
                  </h2>

                </div>

              </div>


              <div className="relative ml-8 space-y-8 border-l-2 border-slate-200 pl-12">

                {day.activities?.map((activity, index) => {

                  const Icon =
                    icons[activity.category] || MapPin;

                  return (

                    <div
                      key={index}
                      className="relative rounded-[30px] border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    >

                      <div className="absolute -left-[61px] top-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-slate-900 text-white shadow-lg">
                        <Icon size={20} />
                      </div>


                      <div className="flex flex-wrap items-center justify-between gap-4">

                        <div>

                          <h3 className="text-2xl font-black text-slate-900">
                            {activity.title}
                          </h3>

                          <p className="mt-3 leading-7 text-slate-600">
                            {activity.description}
                          </p>

                        </div>


                        <div className="rounded-2xl bg-slate-100 px-5 py-3 font-bold text-slate-900">

                          <Clock3
                            size={16}
                            className="mr-2 inline"
                          />

                          {activity.time}

                        </div>

                      </div>


                      <div className="mt-8 grid gap-4 md:grid-cols-3">

                        <InfoCard
                          icon={<MapPin size={18} />}
                          title="Location"
                          value={activity.location}
                        />

                        <InfoCard
                          icon={<Car size={18} />}
                          title="Transport"
                          value={activity.transport}
                        />

                        <InfoCard
                          icon={<Wallet size={18} />}
                          title="Estimated Cost"
                          value={activity.estimatedCost}
                        />

                      </div>

                    </div>

                  );

                })}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}


function RouteLegCard({ leg }) {
  const options = leg.transportOptions || [];

  return (
    <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-200 p-7">

        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Route size={22} />
            </div>

            <div>

              <p className="text-xs font-bold uppercase tracking-[2px] text-slate-400">
                Route
              </p>

              <h3 className="mt-1 text-2xl font-black text-slate-900">
                {leg.from} → {leg.to}
              </h3>

            </div>

          </div>


          <div className="flex flex-wrap gap-3">

            {leg.distance && (
              <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">
                📏 {leg.distance}
              </div>
            )}

            {leg.estimatedTravelTime && (
              <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">
                ⏱ {leg.estimatedTravelTime}
              </div>
            )}

          </div>

        </div>


        {leg.recommendedTransport && (
          <div className="mt-5 rounded-2xl bg-blue-50 p-4 text-sm text-blue-900">
            <span className="font-bold">
              Recommended:
            </span>{" "}
            {leg.recommendedTransport}
          </div>
        )}

      </div>


      <div className="grid gap-px bg-slate-200 md:grid-cols-2 xl:grid-cols-5">

        {options.map((option, index) => (

          <TransportOption
            key={`${option.mode}-${index}`}
            option={option}
          />

        ))}

      </div>


      <div className="border-t border-slate-200 bg-slate-50 px-6 py-4">

        <p className="text-xs leading-5 text-slate-500">
          Estimated fare only. Prices can vary depending on distance,
          traffic, season, vehicle type, operator and local conditions.
          This is not live availability or live pricing.
        </p>

      </div>

    </div>
  );
}


function TransportOption({ option }) {
  const Icon =
    transportIcons[option.mode] || Car;

  const unavailable =
    !option.estimatedFare ||
    option.estimatedFare
      .toLowerCase()
      .includes("not practical");

  return (
    <div className="bg-white p-5">

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
          <Icon size={19} />
        </div>

        <div>

          <p className="text-sm font-bold text-slate-900">
            {option.mode}
          </p>

          <p className="text-xs text-slate-400">
            Estimated fare
          </p>

        </div>

      </div>


      <p
        className={`mt-5 text-xl font-black ${
          unavailable
            ? "text-slate-400"
            : "text-slate-900"
        }`}
      >
        {option.estimatedFare || "Not available"}
      </p>


      {option.label && (
        <p className="mt-2 text-xs leading-5 text-slate-500">
          {option.label}
        </p>
      )}

    </div>
  );
}


function InfoCard({
  icon,
  title,
  value,
}) {
  return (
    <div className="rounded-2xl bg-slate-50 p-5">

      <div className="mb-3 flex items-center gap-2 text-slate-500">
        {icon}

        <span className="text-sm font-semibold">
          {title}
        </span>
      </div>

      <h4 className="font-bold text-slate-900">
        {value || "Not specified"}
      </h4>

    </div>
  );
}


function PrepCard({
  icon,
  title,
  items = [],
}) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <div className="rounded-2xl bg-slate-900 p-3 text-white">
          {icon}
        </div>

        <h3 className="text-xl font-black text-slate-900">
          {title}
        </h3>

      </div>


      <div className="space-y-3">

        {items.map((item, index) => (

          <div
            key={`${item}-${index}`}
            className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3"
          >

            <CheckCircle2
              size={18}
              className="shrink-0 text-emerald-500"
            />

            <span className="font-medium text-slate-700">
              {item}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}