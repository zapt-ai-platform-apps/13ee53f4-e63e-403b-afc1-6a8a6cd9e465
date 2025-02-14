import React from 'react';

export default function ItinerarySchedule({ itineraryDays, hotels, navigate }) {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-2">Day-by-Day Schedule</h2>
      <ul className="mb-6 space-y-2">
        {itineraryDays.map(day => (
          <li key={day.day} className="flex items-center justify-between">
            <span>{day.details}</span>
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
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Hotel Options</h2>
      <ul className="mb-6 space-y-2">
        {hotels.map((hotel, index) => (
          <li key={index}>
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
    </>
  );
}