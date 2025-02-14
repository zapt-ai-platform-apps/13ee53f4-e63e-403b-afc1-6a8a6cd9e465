import React from 'react';
import { useTravelPlan } from '../contexts/TravelPlanContext';
import { useNavigate } from 'react-router-dom';
import { generateItinerary } from '../utils/itineraryUtils';

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

  const {
    nationality,
    destination,
    budget,
    specialAssistance,
    activities,
    numberOfTravelers,
    tripDuration,
    accommodationType,
  } = travelPlan;

  console.log("Generating itinerary for travel plan:", travelPlan);
  const { itineraryDays, visaRequired, hotels } = generateItinerary(travelPlan);

  return (
    <div className="flex-grow p-4">
      <h1 className="text-3xl font-bold mb-4">Your Itinerary</h1>
      <div className="mb-6">
        <p><strong>Nationality:</strong> {nationality}</p>
        <p><strong>Destination:</strong> {destination}</p>
        <p><strong>Budget:</strong> {budget}</p>
        <p><strong>Special Assistance:</strong> {specialAssistance || 'None'}</p>
        <p><strong>Preferred Activities:</strong> {activities}</p>
        <p><strong>Number of Travelers:</strong> {numberOfTravelers}</p>
        <p><strong>Trip Duration:</strong> {tripDuration} days</p>
        <p><strong>Accommodation Type:</strong> {accommodationType}</p>
        <p><strong>Visa Requirement:</strong> {visaRequired ? 'Visa may be required' : 'No visa required'}</p>
      </div>
      <h2 className="text-2xl font-semibold mb-2">Day-by-Day Schedule</h2>
      <ul className="mb-6">
        {itineraryDays.map(day => (
          <li key={day.day} className="mb-2"> {day.details} </li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Hotel Options</h2>
      <ul className="mb-6">
        {hotels.map((hotel, index) => (
          <li key={index} className="mb-2">
            <p><strong>{hotel.name}</strong> - {hotel.price}</p>
            <a
              href={hotel.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline cursor-pointer"
            >
              Book Now
            </a>
          </li>
        ))}
      </ul>
      <div className="flex justify-between">
        <button
          onClick={() => navigate('/')}
          className="bg-gray-500 text-white py-2 px-4 rounded cursor-pointer"
        >
          Back to Form
        </button>
        <button
          onClick={() => navigate('/map')}
          className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
        >
          View Map
        </button>
      </div>
    </div>
  );
}