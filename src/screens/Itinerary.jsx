import React from 'react';
import { useTravelPlan } from '../contexts/TravelPlanContext';
import { useNavigate } from 'react-router-dom';
import { generateItinerary } from '../utils/itineraryUtils';
import ItineraryDetails from '../components/ItineraryDetails';
import ItinerarySchedule from '../components/ItinerarySchedule';

export default function Itinerary() {
  const { travelPlan } = useTravelPlan();
  const navigate = useNavigate();

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

  console.log("Generating itinerary for travel plan:", travelPlan);
  const { itineraryDays, visaRequired, hotels } = generateItinerary(travelPlan);

  return (
    <div className="flex-grow p-4">
      <h1 className="text-3xl font-bold mb-4">Your Itinerary</h1>
      <ItineraryDetails travelPlan={travelPlan} visaRequired={visaRequired} />
      <ItinerarySchedule itineraryDays={itineraryDays} hotels={hotels} navigate={navigate} />
    </div>
  );
}