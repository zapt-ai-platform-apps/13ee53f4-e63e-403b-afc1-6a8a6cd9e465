import React from 'react';

export default function ItineraryDetails({ travelPlan, visaRequired }) {
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

  return (
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
  );
}