import React from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapClickHandler from './MapClickHandler';

export default function ItineraryMap({ markerPosition, setMarkerPosition, currentDayInfo }) {
  return (
    <div className="h-96 mb-4">
      <MapContainer center={[51.505, -0.09]} zoom={13} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapClickHandler setMarkerPosition={setMarkerPosition} />
        {markerPosition && <Marker position={markerPosition} />}
        {currentDayInfo && currentDayInfo.route && (
          <Polyline positions={currentDayInfo.route} color="blue" />
        )}
      </MapContainer>
    </div>
  );
}