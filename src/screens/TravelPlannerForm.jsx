import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTravelPlan } from '../contexts/TravelPlanContext';
import { useNavigate } from 'react-router-dom';
import { StepOne, StepTwo, StepThree, StepFour, StepFive, StepSix, StepSeven } from '../components/TravelPlannerSteps';

export default function TravelPlannerForm() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      nationality: '',
      destination: '',
      startDate: null,
      endDate: null,
      travelerType: '',
      budget: '',
      flightNotBooked: false,
      accommodationPreference: '',
      activityPreferences: [],
      specialAssistance: '',
      restaurantPreferences: []
    }
  });
  const { setTravelPlan } = useTravelPlan();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const onSubmit = async (data) => {
    setLoading(true);
    console.log("Form submission data:", data);
    // Add a unique itinerary ID
    const itineraryData = { ...data, id: Date.now().toString() };
    setTimeout(() => {
      setTravelPlan(itineraryData);
      setLoading(false);
      navigate('/itinerary');
    }, 1000);
  };

  return (
    <div className="flex-grow flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">Travel Planner Questionnaire</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
        {step === 1 && <StepOne register={register} nextStep={nextStep} />}
        {step === 2 && <StepTwo register={register} control={control} nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <StepThree register={register} nextStep={nextStep} prevStep={prevStep} />}
        {step === 4 && <StepFour register={register} nextStep={nextStep} prevStep={prevStep} />}
        {step === 5 && <StepFive register={register} nextStep={nextStep} prevStep={prevStep} />}
        {step === 6 && <StepSix register={register} nextStep={nextStep} prevStep={prevStep} />}
        {step === 7 && <StepSeven prevStep={prevStep} loading={loading} />}
      </form>
    </div>
  );
}