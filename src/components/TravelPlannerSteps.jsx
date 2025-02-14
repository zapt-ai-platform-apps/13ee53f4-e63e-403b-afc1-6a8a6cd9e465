import React from 'react';

export function StepOne({ register, nextStep }) {
  return (
    <div>
      <label className="block mb-2">Nationality</label>
      <input
        type="text"
        {...register('nationality', { required: true })}
        className="w-full p-2 border mb-4 box-border"
      />
      <label className="block mb-2">Destination</label>
      <input
        type="text"
        {...register('destination', { required: true })}
        className="w-full p-2 border mb-4 box-border"
      />
      <div className="flex justify-between">
        <button
          type="button"
          onClick={nextStep}
          className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export function StepTwo({ register, nextStep, prevStep }) {
  return (
    <div>
      <label className="block mb-2">Budget</label>
      <input
        type="number"
        {...register('budget', { required: true })}
        className="w-full p-2 border mb-4 box-border"
      />
      <label className="block mb-2">Special Assistance Needs</label>
      <input
        type="text"
        {...register('specialAssistance')}
        className="w-full p-2 border mb-4 box-border"
      />
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-500 text-white py-2 px-4 rounded cursor-pointer"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={nextStep}
          className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export function StepThree({ register, prevStep, loading }) {
  return (
    <div>
      <label className="block mb-2">Preferred Activities</label>
      <input
        type="text"
        {...register('activities', { required: true })}
        className="w-full p-2 border mb-4 box-border"
      />
      <label className="block mb-2">Number of Travelers</label>
      <input
        type="number"
        {...register('numberOfTravelers', { required: true })}
        className="w-full p-2 border mb-4 box-border"
      />
      <label className="block mb-2">Trip Duration (days)</label>
      <input
        type="number"
        {...register('tripDuration', { required: true })}
        className="w-full p-2 border mb-4 box-border"
      />
      <label className="block mb-2">Type of Accommodation</label>
      <input
        type="text"
        {...register('accommodationType', { required: true })}
        className="w-full p-2 border mb-4 box-border"
      />
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-500 text-white py-2 px-4 rounded cursor-pointer"
          disabled={loading}
        >
          Previous
        </button>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded cursor-pointer"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Submit'}
        </button>
      </div>
    </div>
  );
}