import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";

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
      map.flyTo(position, 6, {
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
    <section className="mx-auto mt-24 max-w-7xl px-6">

      <div className="mb-10 text-center">
        <h2 className="text-5xl font-black">
          Explore on Map
        </h2>

        <p className="mt-4 text-slate-600">
          Interactive destination map
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl shadow-2xl">

        <MapContainer
          center={position}
          zoom={6}
          style={{
            height: "500px",
            width: "100%",
          }}
        >

          <ChangeMapView position={position} />

          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position}>
            <Popup>
              {destination.name.common}
            </Popup>
          </Marker>

        </MapContainer>

      </div>

    </section>
  );
}