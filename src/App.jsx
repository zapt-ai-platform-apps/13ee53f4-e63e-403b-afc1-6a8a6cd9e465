import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TravelPlannerForm from './screens/TravelPlannerForm';
import Itinerary from './screens/Itinerary';
import MapView from './screens/MapView';
import { TravelPlanProvider } from './contexts/TravelPlanContext';
import MadeOnZaptBadge from './components/MadeOnZaptBadge';

export default function App() {
  console.log("App initialized");
  return (
    <TravelPlanProvider>
      <BrowserRouter>
        <div className="min-h-screen text-gray-900 flex flex-col">
          <Routes>
            <Route path="/" element={<TravelPlannerForm />} />
            <Route path="/itinerary" element={<Itinerary />} />
            <Route path="/map" element={<MapView />} />
          </Routes>
          <MadeOnZaptBadge />
        </div>
      </BrowserRouter>
    </TravelPlanProvider>
  );
}