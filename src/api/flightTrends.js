import axios from 'axios';

export async function fetchFlightTrends() {
  try {
    console.log("Fetching flight trends data");
    // Simulate API call for flight trends analysis
    const response = await axios.get('https://api.example.com/flight-trends', {
      params: { apiKey: import.meta.env.VITE_PUBLIC_FLIGHT_TRENDS_API_KEY }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching flight trends:", error);
    throw error;
  }
}