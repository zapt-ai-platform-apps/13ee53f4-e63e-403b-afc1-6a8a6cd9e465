import React, { useState } from 'react';
import { useTravelPlan } from '../contexts/TravelPlanContext';
import { useNavigate } from 'react-router-dom';
import { generateItinerary } from '../utils/itineraryUtils';
import ItineraryDetails from '../components/ItineraryDetails';
import ItinerarySchedule from '../components/ItinerarySchedule';
import PDFDownloadForm from '../components/PDFDownloadForm';

export default function Itinerary() {
  const { travelPlan } = useTravelPlan();
  const navigate = useNavigate();
  const [showPDFForm, setShowPDFForm] = useState(false);

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
  const { itineraryDays, visaRequired, hotels, restaurants } = generateItinerary(travelPlan);

  return (
    <div className="flex-grow p-4">
      <h1 className="text-3xl font-bold mb-4">Your Itinerary</h1>
      <ItineraryDetails travelPlan={travelPlan} visaRequired={visaRequired} />
      <ItinerarySchedule itineraryDays={itineraryDays} hotels={hotels} navigate={navigate} />
      {restaurants && restaurants.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Restaurant Recommendations</h2>
          <ul className="space-y-2">
            {restaurants.map((restaurant, index) => (
              <li key={index}>
                <p><strong>{restaurant.name}</strong> - {restaurant.price}</p>
                <a
                  href={restaurant.bookingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline cursor-pointer"
                >
                  Book Now
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        onClick={() => setShowPDFForm(true)}
        className="bg-purple-500 text-white py-2 px-4 rounded cursor-pointer mb-4"
      >
        Download PDF
      </button>
      {showPDFForm && <PDFDownloadForm onClose={() => setShowPDFForm(false)} />}
    </div>
  );
}