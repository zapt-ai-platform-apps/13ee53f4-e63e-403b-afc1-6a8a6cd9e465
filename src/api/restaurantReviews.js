import axios from 'axios';

export async function fetchRestaurantReviews(preference) {
  try {
    console.log("Fetching restaurant reviews for:", preference);
    // Simulate API call to TripAdvisor or similar service
    const response = await axios.get('https://api.example.com/restaurant-reviews', {
      params: { query: preference, apiKey: import.meta.env.VITE_PUBLIC_TRIPADVISOR_API_KEY }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching restaurant reviews:", error);
    throw error;
  }
}