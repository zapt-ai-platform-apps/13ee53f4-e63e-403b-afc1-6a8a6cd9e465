import React, { createContext, useContext, useState } from 'react';

const TravelPlanContext = createContext();

export function TravelPlanProvider({ children }) {
  const [travelPlan, setTravelPlan] = useState(null);

  return (
    <TravelPlanContext.Provider value={{ travelPlan, setTravelPlan }}>
      {children}
    </TravelPlanContext.Provider>
  );
}

export function useTravelPlan() {
  return useContext(TravelPlanContext);
}