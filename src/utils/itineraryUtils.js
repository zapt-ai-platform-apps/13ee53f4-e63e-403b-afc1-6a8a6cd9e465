const {
  getVisaInfo,
  calculateDays,
  generateItineraryDays,
  getHotels,
  getRestaurants,
  getBestTimeToTravel
} = require('./itineraryHelpers');

function generateItinerary(travelPlan) {
  const { visaRequired, visaDetails } = getVisaInfo(travelPlan);
  const days = calculateDays(travelPlan);
  const itineraryDays = generateItineraryDays(days);
  const hotels = getHotels();
  const restaurants = getRestaurants(travelPlan);
  const bestTimeToTravel = getBestTimeToTravel(travelPlan);
  
  console.log("Generated itinerary with", days, "days.");
  return { itineraryDays, visaRequired, visaDetails, hotels, restaurants, bestTimeToTravel };
}

module.exports = {
  generateItinerary
};