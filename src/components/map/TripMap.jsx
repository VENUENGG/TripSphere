import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";

import { MapPinned, Navigation, Globe } from "lucide-react";

import { getCoordinates } from "../../services/mapService";

import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function ChangeMapView({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, 8, {
        duration: 2,
      });
    }
  }, [position, map]);

  return null;
}

export default function TripMap({ destination }) {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    async function load() {
      if (!destination) return;

      try {
        const coords = await getCoordinates(
          destination.city ||
            destination.capital?.[0] ||
            destination.name.common
        );

        setPosition(coords);
      } catch (err) {
        console.error(err);
      }
    }

    load();
  }, [destination]);

  if (!position) return null;

  return (
    <section className="relative mx-auto mt-36 max-w-7xl px-6">

      <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-cyan-300/20 blur-[140px]" />

      <div className="mb-16 text-center">

        <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
          Interactive Map
        </span>

        <h2 className="mt-6 text-5xl font-black">
          Explore Your Destination
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
          Instantly visualize your selected destination with live maps and
          geographical information.
        </p>

      </div>

      {/* Top Card */}

      <div className="mb-8 rounded-[34px] bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 p-8 text-white shadow-[0_30px_80px_rgba(37,99,235,.35)]">

        <div className="flex flex-wrap items-center justify-between gap-8">

          <div>

            <p className="uppercase tracking-[4px] text-white/70">
              Current Destination
            </p>

            <h2 className="mt-3 text-5xl font-black">
              {destination.city || destination.name.common}
            </h2>

            <p className="mt-3 text-lg text-white/80">
              {destination.region}
            </p>

          </div>

          <div className="grid grid-cols-3 gap-5">

            <div className="rounded-3xl bg-white/10 p-5 backdrop-blur-xl">

              <Navigation className="mb-4" />

              <p className="text-white/70">
                Capital
              </p>

              <h3 className="mt-2 text-xl font-bold">
                {destination.capital?.[0]}
              </h3>

            </div>

            <div className="rounded-3xl bg-white/10 p-5 backdrop-blur-xl">

              <Globe className="mb-4" />

              <p className="text-white/70">
                Region
              </p>

              <h3 className="mt-2 text-xl font-bold">
                {destination.region}
              </h3>

            </div>

            <div className="rounded-3xl bg-white/10 p-5 backdrop-blur-xl">

              <MapPinned className="mb-4" />

              <p className="text-white/70">
                Coordinates
              </p>

              <h3 className="mt-2 text-lg font-bold">
                {position[0].toFixed(2)}, {position[1].toFixed(2)}
              </h3>

            </div>

          </div>

        </div>

      </div>

      {/* Map */}

      <div className="overflow-hidden rounded-[36px] border border-white/50 bg-white p-3 shadow-[0_35px_100px_rgba(15,23,42,.12)]">

        <MapContainer
          center={position}
          zoom={8}
          style={{
            height: "620px",
            width: "100%",
            borderRadius: "28px",
          }}
        >

          <ChangeMapView position={position} />

          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position}>
            <Popup>
              <strong>
                {destination.city || destination.name.common}
              </strong>
              <br />
              {destination.region}
            </Popup>
          </Marker>

        </MapContainer>

      </div>

    </section>
  );
}