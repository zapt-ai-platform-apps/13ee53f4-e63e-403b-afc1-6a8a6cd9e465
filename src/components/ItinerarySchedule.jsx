import React from 'react';
import ItineraryDay from './ItineraryDay';
import HotelList from './HotelList';

export default function ItinerarySchedule({ itineraryDays, hotels, navigate }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Day-by-Day Schedule</h2>
      <ul className="mb-6 space-y-4">
        {itineraryDays.map(day => (
          <ItineraryDay key={day.day} day={day} navigate={navigate} />
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Hotel Options</h2>
      <HotelList hotels={hotels} />
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