import React from 'react';
import DatePicker from 'react-datepicker';
import { Controller } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';

export function StepOne({ register, nextStep }) {
  const nationalities = ["United States", "Canada", "United Kingdom", "Germany", "France", "India", "Australia"];
  const destinations = ["United States", "Canada", "United Kingdom", "Germany", "France", "India", "Australia"];
  return (
    <div>
      <label className="block mb-2">Select Your Nationality</label>
      <select {...register('nationality', { required: true })} className="w-full p-2 border mb-4 box-border">
        <option value="">--Select Nationality--</option>
        {nationalities.map((nation) => (
          <option key={nation} value={nation}>{nation}</option>
        ))}
      </select>
      <label className="block mb-2">Select Your Destination</label>
      <select {...register('destination', { required: true })} className="w-full p-2 border mb-4 box-border">
        <option value="">--Select Destination--</option>
        {destinations.map((dest) => (
          <option key={dest} value={dest}>{dest}</option>
        ))}
      </select>
      <div className="flex justify-end">
        <button type="button" onClick={nextStep} className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">
          Next
        </button>
      </div>
    </div>
  );
}

export function StepTwo({ register, control, nextStep, prevStep }) {
  return (
    <div>
      <label className="block mb-2">Travel Start Date</label>
      <Controller
        control={control}
        name="startDate"
        rules={{ required: true }}
        render={({ field }) => (
          <DatePicker
            placeholderText="Select start date"
            selected={field.value}
            onChange={field.onChange}
            className="w-full p-2 border mb-4 box-border"
          />
        )}
      />
      <label className="block mb-2">Travel End Date</label>
      <Controller
        control={control}
        name="endDate"
        rules={{ required: true }}
        render={({ field }) => (
          <DatePicker
            placeholderText="Select end date"
            selected={field.value}
            onChange={field.onChange}
            className="w-full p-2 border mb-4 box-border"
          />
        )}
      />
      <label className="block mb-2">Traveler Type</label>
      <div className="mb-4">
        {["Solo", "Couple", "Family", "Group"].map(option => (
          <label key={option} className="mr-4 cursor-pointer">
            <input type="radio" value={option} {...register('travelerType', { required: true })} className="mr-1 cursor-pointer" />
            {option}
          </label>
        ))}
      </div>
      <label className="block mb-2">Budget</label>
      <select {...register('budget', { required: true })} className="w-full p-2 border mb-4 box-border">
        <option value="">--Select Budget--</option>
        {["Budget", "Mid-Range", "Luxury"].map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <div className="mb-4">
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" {...register('flightNotBooked')} className="mr-2 cursor-pointer" />
          I haven't booked my flight yet
        </label>
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

export function StepThree({ register, nextStep, prevStep }) {
  return (
    <div>
      <label className="block mb-2">Accommodation Preference</label>
      {["City Center", "Near Beach", "Unique Stays"].map(option => (
        <label key={option} className="block mb-2 cursor-pointer">
          <input type="radio" value={option} {...register('accommodationPreference', { required: true })} className="mr-2 cursor-pointer" />
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