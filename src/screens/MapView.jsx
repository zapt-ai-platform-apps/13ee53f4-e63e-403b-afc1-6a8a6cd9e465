import React, { useState } from 'react';
import { useTravelPlan } from '../contexts/TravelPlanContext';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../utils/leafletConfig';
import MapClickHandler from '../components/MapClickHandler';

export default function MapView() {
  const { travelPlan } = useTravelPlan();
  const navigate = useNavigate();
  const [markerPosition, setMarkerPosition] = useState(null);

  if (!travelPlan) {
    return (
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <p>No travel plan data found. Please complete the questionnaire first.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
        >
          Go to Form
        </button>
      </div>
    );
  }

  const defaultPosition = [51.505, -0.09];

  return (
    <div className="flex-grow p-4">
      <h1 className="text-3xl font-bold mb-4">Map View</h1>
      <p className="mb-4">Click on the map to drop a pin and invite a friend to collaborate on the destination.</p>
      <div className="h-96 mb-4">
        <MapContainer center={defaultPosition} zoom={13} className="h-full w-full">
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapClickHandler setMarkerPosition={setMarkerPosition} />
          {markerPosition && <Marker position={markerPosition} />}
        </MapContainer>
      </div>
      {markerPosition && (
        <p className="mb-4">
          Pin dropped at: {markerPosition.lat.toFixed(4)}, {markerPosition.lng.toFixed(4)}
        </p>
      )}
      <button
        onClick={() => navigate('/itinerary')}
        className="bg-gray-500 text-white py-2 px-4 rounded cursor-pointer"
      >
        Back to Itinerary
      </button>
    </div>
  );
}