import React from 'react';
import { GoogleMap, LoadScript, Polyline } from '@react-google-maps/api';

export default function GoogleMapsRoute({ currentDayInfo }) {
  const mapContainerStyle = {
    height: "400px",
    width: "100%"
  };

  const center = { lat: 51.505, lng: -0.09 };

  // Use morning segment for route as default
  const route = currentDayInfo && currentDayInfo.morning ? currentDayInfo.morning.routeSegment.map(([lat, lng]) => ({ lat, lng })) : [];

  // Simulate estimated travel time from Google Maps API integration
  const estimatedTravelTime = currentDayInfo && currentDayInfo.morning ? currentDayInfo.morning.estimatedTravelTime : "N/A";

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div className="mb-4">
        <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={13}>
          {route.length > 0 && <Polyline path={route} options={{ strokeColor: "#0000FF", strokeWeight: 4 }} />}
        </GoogleMap>
        <p className="mt-2 text-center">Estimated Travel Time: {estimatedTravelTime}</p>
      </div>
    </LoadScript>
  );
}