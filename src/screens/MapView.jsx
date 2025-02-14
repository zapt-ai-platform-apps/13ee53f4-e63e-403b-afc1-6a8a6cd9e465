import React, { useState } from 'react';
import { useTravelPlan } from '../contexts/TravelPlanContext';
import { useNavigate, useLocation } from 'react-router-dom';
import '../utils/leafletConfig';
import MapClickHandler from '../components/MapClickHandler';
import { generateItinerary } from '../utils/itineraryUtils';
import DayRouteSwitcher from '../components/DayRouteSwitcher';
import ItineraryMap from '../components/ItineraryMap';

export default function MapView() {
  const { travelPlan } = useTravelPlan();
  const navigate = useNavigate();
  const location = useLocation();
  const initialSelectedDay = location.state?.selectedDay || 1;
  const [selectedDay, setSelectedDay] = useState(initialSelectedDay);
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

  const { itineraryDays } = generateItinerary(travelPlan);
  const totalDays = itineraryDays.length;
  const currentDayInfo = itineraryDays.find(day => day.day === selectedDay);

  const handleShare = async () => {
    if (markerPosition) {
      const shareUrl = `${window.location.origin}/map?day=${selectedDay}&marker=${markerPosition.lat.toFixed(4)},${markerPosition.lng.toFixed(4)}`;
      try {
        await navigator.clipboard.writeText(shareUrl);
        console.log('Share link copied:', shareUrl);
        alert('Share link copied to clipboard!');
      } catch (error) {
        console.error('Failed to copy share link:', error);
      }
    }
  };

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
      <ItineraryMap
        markerPosition={markerPosition}
        setMarkerPosition={setMarkerPosition}
        currentDayInfo={currentDayInfo}
      />
      {currentDayInfo && (
        <p className="mb-4">
          Viewing route for Day {selectedDay}: {currentDayInfo.details}
        </p>
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
      <button
        onClick={() => navigate('/itinerary')}
        className="bg-gray-500 text-white py-2 px-4 rounded cursor-pointer"
      >
        Back to Itinerary
      </button>
    </div>
  );
}