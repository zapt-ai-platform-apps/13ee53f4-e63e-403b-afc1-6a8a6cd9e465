import React from 'react';
import DayRouteSwitcher from './DayRouteSwitcher';
import ItineraryMap from './ItineraryMap';
import GoogleMapsRoute from './GoogleMapsRoute';
import CollaborationWidget from './CollaborationWidget';

export default function MapViewContent({
  selectedDay,
  setSelectedDay,
  totalDays,
  currentDayInfo,
  markerPosition,
  setMarkerPosition,
  mapType,
  toggleMapType,
  handleShare,
  user,
  travelPlanId,
  navigate
}) {
  return (
    <div className="flex-grow p-4">
      <h1 className="text-3xl font-bold mb-4">Map View</h1>
      <p className="mb-4">
        Click on the map to drop a pin for collaboration, or use the day switcher below to view detailed routes.
      </p>
      <DayRouteSwitcher
        totalDays={totalDays}
        selectedDay={selectedDay}
        onSelectDay={(day) => {
          console.log(`Day switched to ${day}`);
          setSelectedDay(day);
        }}
      />
      <button onClick={toggleMapType} className="bg-purple-500 text-white py-2 px-4 rounded cursor-pointer mb-4">
        Switch to {mapType === 'leaflet' ? 'Google Maps' : 'Leaflet'} View
      </button>
      {mapType === 'leaflet' ? (
        <ItineraryMap
          markerPosition={markerPosition}
          setMarkerPosition={setMarkerPosition}
          currentDayInfo={currentDayInfo}
        />
      ) : (
        <GoogleMapsRoute currentDayInfo={currentDayInfo} />
      )}
      {markerPosition && (
        <div className="mb-4">
          <p>
            Pin dropped at: {markerPosition.lat.toFixed(4)}, {markerPosition.lng.toFixed(4)}
          </p>
          <button
            onClick={handleShare}
            className="bg-green-500 text-white py-2 px-4 rounded cursor-pointer"
          >
            Share Collaboration Point
          </button>
        </div>
      )}
      {user && travelPlanId && (
        <CollaborationWidget itineraryId={travelPlanId} />
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