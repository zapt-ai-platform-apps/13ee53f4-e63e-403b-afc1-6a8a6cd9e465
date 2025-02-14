import React, { useState } from 'react';
import { useTravelPlan } from '../contexts/TravelPlanContext';
import { useNavigate, useLocation } from 'react-router-dom';
import '../utils/leafletConfig';
import { generateItinerary } from '../utils/itineraryUtils';
import useAuth from '../hooks/useAuth';
import MapViewContent from '../components/MapViewContent';

export default function MapView() {
  const { travelPlan } = useTravelPlan();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const initialSelectedDay = location.state?.selectedDay || 1;
  const [selectedDay, setSelectedDay] = useState(initialSelectedDay);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [mapType, setMapType] = useState('leaflet');

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
      const shareUrl = `${window.location.origin}/itinerary/${travelPlan.id}?day=${selectedDay}`;
      try {
        await navigator.clipboard.writeText(shareUrl);
        console.log('Share link copied:', shareUrl);
        alert('Share link copied to clipboard!');
      } catch (error) {
        console.error('Failed to copy share link:', error);
      }
    }
  };

  const toggleMapType = () => {
    setMapType(prev => (prev === 'leaflet' ? 'google' : 'leaflet'));
    console.log('Map type toggled to', mapType === 'leaflet' ? 'google' : 'leaflet');
  };

  return (
    <MapViewContent
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}
      totalDays={totalDays}
      currentDayInfo={currentDayInfo}
      markerPosition={markerPosition}
      setMarkerPosition={setMarkerPosition}
      mapType={mapType}
      toggleMapType={toggleMapType}
      handleShare={handleShare}
      user={user}
      travelPlanId={travelPlan.id}
      navigate={navigate}
    />
  );
}