import React from 'react';

export function StepFour({ register, nextStep, prevStep }) {
  const activities = [
    "Cultural & Historical Sites",
    "Nature & Adventure",
    "Shopping & Local Markets",
    "Food & Culinary Experiences",
    "Theme Parks & Attractions",
    "Relaxation & Wellness"
  ];
  return (
    <div>
      <label className="block mb-2">Activity Preferences</label>
      <div className="mb-4">
        {activities.map(activity => (
          <label key={activity} className="block cursor-pointer">
            <input type="checkbox" value={activity} {...register('activityPreferences')} className="mr-2 cursor-pointer" />
            {activity}
          </label>
        ))}
      </div>
      <div className="flex justify-between">
        <button type="button" onClick={prevStep} className="bg-gray-500 text-white py-2 px-4 rounded cursor-pointer">
          Previous
        </button>
        <button type="button" onClick={nextStep} className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">
          Next
        </button>
      </div>
    </div>
  );
}

export function StepFive({ register, nextStep, prevStep }) {
  const assistanceOptions = [
    "No Assistance",
    "Wheelchair Accessible",
    "Traveling with Infants",
    "Pet-Friendly Options"
  ];
  return (
    <div>
      <label className="block mb-2">Special Assistance Needed</label>
      {assistanceOptions.map(option => (
        <label key={option} className="block mb-2 cursor-pointer">
          <input type="radio" value={option} {...register('specialAssistance', { required: true })} className="mr-2 cursor-pointer" />
          {option}
        </label>
      ))}
      <div className="flex justify-between mt-4">
        <button type="button" onClick={prevStep} className="bg-gray-500 text-white py-2 px-4 rounded cursor-pointer">
          Previous
        </button>
        <button type="button" onClick={nextStep} className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">
          Next
        </button>
      </div>
    </div>
  );
}

export function StepSix({ register, nextStep, prevStep }) {
  const restaurants = [
    "Asian Cuisine",
    "Western Cuisine",
    "Vegetarian/Vegan-Friendly",
    "Top-Rated Local Restaurants"
  ];
  return (
    <div>
      <label className="block mb-2">Restaurant Preferences</label>
      <div className="mb-4">
        {restaurants.map(option => (
          <label key={option} className="block cursor-pointer">
            <input type="checkbox" value={option} {...register('restaurantPreferences')} className="mr-2 cursor-pointer" />
            {option}
          </label>
        ))}
      </div>
      <div className="flex justify-between">
        <button type="button" onClick={prevStep} className="bg-gray-500 text-white py-2 px-4 rounded cursor-pointer">
          Previous
        </button>
        <button type="button" onClick={nextStep} className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">
          Next
        </button>
      </div>
    </div>
  );
}

export function StepSeven({ prevStep, loading }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Review and Generate Itinerary</h2>
      <div className="flex justify-between">
        <button type="button" onClick={prevStep} className="bg-gray-500 text-white py-2 px-4 rounded cursor-pointer" disabled={loading}>
          Previous
        </button>
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded cursor-pointer" disabled={loading}>
          {loading ? 'Generating...' : 'Generate Itinerary'}
        </button>
      </div>
    </div>
  );
}