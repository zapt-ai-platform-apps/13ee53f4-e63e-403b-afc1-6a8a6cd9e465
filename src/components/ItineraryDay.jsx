import React from 'react';

export default function ItineraryDay({ day, navigate }) {
  return (
    <li className="border p-4 rounded">
      <h3 className="text-xl font-bold mb-2">Day {day.day}</h3>
      <div className="mb-2">
        <strong>Morning:</strong>
        <p>{day.morning.activities}</p>
        <p className="text-sm">Estimated Travel Time: {day.morning.estimatedTravelTime}</p>
        <p className="text-sm">Must-See: {day.morning.suggestions.mustSeeAttractions}</p>
      </div>
      <div className="mb-2">
        <strong>Afternoon:</strong>
        <p>{day.afternoon.activities}</p>
        <p className="text-sm">Estimated Travel Time: {day.afternoon.estimatedTravelTime}</p>
        <p className="text-sm">Must-See: {day.afternoon.suggestions.mustSeeAttractions}</p>
      </div>
      <div className="mb-2">
        <strong>Evening:</strong>
        <p>{day.evening.activities}</p>
        <p className="text-sm">Estimated Travel Time: {day.evening.estimatedTravelTime}</p>
        <p className="text-sm">Must-See: {day.evening.suggestions.mustSeeAttractions}</p>
      </div>
      <button
        onClick={() => {
          console.log(`Navigating to map view for Day ${day.day}`);
          navigate('/map', { state: { selectedDay: day.day } });
        }}
        className="bg-blue-500 text-white py-1 px-3 rounded cursor-pointer"
      >
        View Route
      </button>
    </li>
  );
}