import React from 'react';

export default function ItineraryDetails({ travelPlan, visaDetails, bestTimeToTravel }) {
  const {
    nationality,
    destination,
    budget,
    specialAssistance,
    activities,
    numberOfTravelers,
    tripDuration,
    accommodationPreference
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
      <p><strong>Accommodation Preference:</strong> {accommodationPreference}</p>
      <p><strong>Visa Information:</strong> {visaDetails}</p>
      {bestTimeToTravel && (
        <p><strong>Best Time to Travel:</strong> {bestTimeToTravel}</p>
      )}
    </div>
  );
}