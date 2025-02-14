import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TravelPlannerForm from './screens/TravelPlannerForm';
import Itinerary from './screens/Itinerary';
import MapView from './screens/MapView';
import Login from './screens/Login';
import { TravelPlanProvider } from './contexts/TravelPlanContext';
import MadeOnZaptBadge from './components/MadeOnZaptBadge';
import useAuth from './hooks/useAuth';
import ChatWidget from './components/ChatWidget';

function Header() {
  const { user, signOut } = useAuth();
  return (
    <header className="flex justify-between items-center p-4 bg-gray-200">
      <nav>
        <Link to="/" className="mr-4 text-blue-500 cursor-pointer">Home</Link>
        <Link to="/map" className="mr-4 text-blue-500 cursor-pointer">Map</Link>
        {user ? (
          <button onClick={signOut} className="bg-red-500 text-white py-1 px-3 rounded cursor-pointer">
            Sign Out
          </button>
        ) : (
          <Link to="/login" className="text-blue-500 cursor-pointer">Login</Link>
        )}
      </nav>
    </header>
  );
}

export default function App() {
  console.log("App initialized");
  return (
    <TravelPlanProvider>
      <BrowserRouter>
        <div className="min-h-screen text-gray-900 flex flex-col">
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<TravelPlannerForm />} />
              <Route path="/itinerary" element={<Itinerary />} />
              <Route path="/map" element={<MapView />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
          <MadeOnZaptBadge />
          <ChatWidget />
        </div>
      </BrowserRouter>
    </TravelPlanProvider>
  );
}