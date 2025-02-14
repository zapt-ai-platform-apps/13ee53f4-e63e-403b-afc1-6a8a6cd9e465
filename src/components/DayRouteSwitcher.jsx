import React from 'react';

export default function DayRouteSwitcher({ totalDays, selectedDay, onSelectDay }) {
  return (
    <div className="flex gap-2 mb-4">
      {Array.from({ length: totalDays }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => onSelectDay(i + 1)}
          className={`py-2 px-4 rounded cursor-pointer ${selectedDay === (i + 1) ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
        >
          Day {i + 1}
        </button>
      ))}
    </div>
  );
}