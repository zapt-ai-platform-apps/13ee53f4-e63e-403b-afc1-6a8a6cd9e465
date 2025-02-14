import axios from 'axios';

export async function fetchHotelPricing(accommodationPreference) {
  try {
    console.log("Fetching hotel pricing for:", accommodationPreference);
    // Simulate API call to affiliate hotel pricing service
    const response = await axios.get('https://api.example.com/hotel-pricing', {
      params: { type: accommodationPreference, apiKey: import.meta.env.VITE_PUBLIC_HOTEL_AFFILIATE_API_KEY }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching hotel pricing:", error);
    throw error;
  }
}