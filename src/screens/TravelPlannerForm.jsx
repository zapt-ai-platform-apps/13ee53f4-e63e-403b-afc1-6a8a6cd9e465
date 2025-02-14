import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTravelPlan } from '../contexts/TravelPlanContext';
import { useNavigate } from 'react-router-dom';
import { StepOne, StepTwo, StepThree } from '../components/TravelPlannerSteps';

export default function TravelPlannerForm() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      nationality: '',
      destination: '',
      budget: '',
      specialAssistance: '',
      activities: '',
      numberOfTravelers: '',
      tripDuration: '',
      accommodationType: ''
    }
  });
  const { setTravelPlan } = useTravelPlan();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    console.log("Form submission data:", data);
    setTimeout(() => {
      setTravelPlan(data);
      setLoading(false);
      navigate('/itinerary');
    }, 1000);
  };

  return (
    <div className="flex-grow flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">Travel Planner Questionnaire</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
        {step === 1 && (
          <StepOne register={register} nextStep={nextStep} />
        )}
        {step === 2 && (
          <StepTwo register={register} nextStep={nextStep} prevStep={prevStep} />
        )}
        {step === 3 && (
          <StepThree register={register} prevStep={prevStep} loading={loading} />
        )}
      </form>
    </div>
  );
}