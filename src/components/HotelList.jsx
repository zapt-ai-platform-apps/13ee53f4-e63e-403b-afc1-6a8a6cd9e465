import React from 'react';

export default function HotelList({ hotels }) {
  return (
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
  );
}