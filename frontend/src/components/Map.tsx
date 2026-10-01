import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = () => {
  const position: [number, number] = [27.6729, 85.3256];

  return (
    <div className="h-full w-full rounded-xl overflow-hidden">
      <MapContainer center={position} zoom={13} className="h-full w-full z-0">
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Lalitpur</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
