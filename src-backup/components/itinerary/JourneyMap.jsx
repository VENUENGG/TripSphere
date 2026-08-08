import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";

import L from "leaflet";
import { useEffect } from "react";

import "leaflet/dist/leaflet.css";

function createMarkerIcon(number) {
  return L.divIcon({
    className: "",
    html: `
      <div style="
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: #2563eb;
        border: 4px solid white;
        box-shadow: 0 4px 14px rgba(0,0,0,.25);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 14px;
        font-weight: 800;
      ">
        ${number}
      </div>
    `,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -20],
  });
}

function FitRoute({ positions }) {
  const map = useMap();

  useEffect(() => {
    if (!positions.length) return;

    if (positions.length === 1) {
      map.setView(positions[0], 11);
      return;
    }

    const bounds = L.latLngBounds(positions);

    map.fitBounds(bounds, {
      padding: [50, 50],
    });
  }, [map, positions]);

  return null;
}

export default function JourneyMap({ stops = [] }) {
  const validStops = stops.filter(
    (stop) =>
      typeof stop?.lat === "number" &&
      typeof stop?.lng === "number"
  );

  if (!validStops.length) {
    return (
      <div className="flex h-[420px] items-center justify-center rounded-[32px] border border-slate-200 bg-slate-50">
        <div className="text-center">
          <div className="text-4xl">🗺️</div>

          <h3 className="mt-4 text-xl font-black text-slate-900">
            Journey Map
          </h3>

          <p className="mt-2 max-w-md text-sm text-slate-500">
            Your route will appear here once the destination locations
            are available.
          </p>
        </div>
      </div>
    );
  }

  const positions = validStops.map((stop) => [
    stop.lat,
    stop.lng,
  ]);

  return (
    <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,.08)]">
      <div className="border-b border-slate-200 px-6 py-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[3px] text-slate-400">
              Your Route
            </p>

            <h2 className="mt-1 text-2xl font-black text-slate-900">
              Journey Map
            </h2>
          </div>

          <div className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
            {validStops.length} Stops
          </div>
        </div>
      </div>

      <div className="h-[480px] w-full">
        <MapContainer
          center={positions[0]}
          zoom={6}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <FitRoute positions={positions} />

          <Polyline
            positions={positions}
            pathOptions={{
              color: "#2563eb",
              weight: 5,
              opacity: 0.9,
            }}
          />

          {validStops.map((stop, index) => (
            <Marker
              key={`${stop.name}-${index}`}
              position={[stop.lat, stop.lng]}
              icon={createMarkerIcon(index + 1)}
            >
              <Popup>
                <div className="min-w-[160px]">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Stop {index + 1}
                  </p>

                  <h3 className="mt-1 text-base font-black text-slate-900">
                    {stop.name}
                  </h3>

                  {stop.description && (
                    <p className="mt-2 text-sm leading-5 text-slate-600">
                      {stop.description}
                    </p>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="flex flex-wrap gap-3 border-t border-slate-200 bg-slate-50 p-5">
        {validStops.map((stop, index) => (
          <div
            key={`${stop.name}-legend-${index}`}
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
              {index + 1}
            </div>

            <span className="text-sm font-semibold text-slate-700">
              {stop.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}