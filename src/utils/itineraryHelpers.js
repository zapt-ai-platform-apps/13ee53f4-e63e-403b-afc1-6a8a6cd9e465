function getVisaInfo(travelPlan) {
  const visaRequired = travelPlan.nationality.toLowerCase() !== travelPlan.destination.toLowerCase();
  const visaDetails = visaRequired
    ? "Visa required. Please check with the destination's embassy for required documents such as passport, photos, and application form."
    : "No visa required.";
  return { visaRequired, visaDetails };
}

function calculateDays(travelPlan) {
  let days = 1;
  if (travelPlan.startDate && travelPlan.endDate) {
    const start = new Date(travelPlan.startDate);
    const end = new Date(travelPlan.endDate);
    const diffTime = Math.abs(end - start);
    days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
  return days;
}

function generateItineraryDays(days) {
  return Array.from({ length: days }, (_, i) => {
    const baseLat = 51.505 + i * 0.005;
    const baseLng = -0.09 + i * 0.005;
    return {
      day: i + 1,
      morning: {
        activities: "Visit a local cafe and park.",
        routeSegment: [
          [baseLat, baseLng],
          [baseLat + 0.005, baseLng + 0.005]
        ],
        estimatedTravelTime: "15 mins",
        suggestions: {
          mustSeeAttractions: "Local museum",
          hiddenGems: "Charming antique shop",
          freeTimeSuggestions: "Relax at the botanical garden"
        }
      },
      afternoon: {
        activities: "Tour historical landmarks.",
        routeSegment: [
          [baseLat + 0.005, baseLng + 0.005],
          [baseLat + 0.010, baseLng + 0.005]
        ],
        estimatedTravelTime: "20 mins",
        suggestions: {
          mustSeeAttractions: "Old town center",
          hiddenGems: "Local art gallery",
          freeTimeSuggestions: "Coffee break at market square"
        }
      },
      evening: {
        activities: "Enjoy local cuisine and entertainment.",
        routeSegment: [
          [baseLat + 0.010, baseLng + 0.005],
          [baseLat + 0.010, baseLng + 0.010]
        ],
        estimatedTravelTime: "10 mins",
        suggestions: {
          mustSeeAttractions: "City night view",
          hiddenGems: "Cozy jazz club",
          freeTimeSuggestions: "Stroll along the river"
        }
      }
    };
  });
}

function getHotels() {
  return [
    {
      name: "Hotel Sunshine",
      price: "$100/night",
      bookingLink: "https://booking.example.com/?hotel=Hotel+Sunshine"
    },
    {
      name: "Hotel Paradise",
      price: "$150/night",
      bookingLink: "https://booking.example.com/?hotel=Hotel+Paradise"
    },
    {
      name: "Hotel Elite",
      price: "$200/night",
      bookingLink: "https://booking.example.com/?hotel=Hotel+Elite"
    }
  ];
}

function getRestaurants(travelPlan) {
  if (travelPlan.restaurantPreferences && travelPlan.restaurantPreferences.length > 0) {
    return travelPlan.restaurantPreferences.map(pref => ({
      name: `${pref} Delight`,
      price: "$50 approx.",
      rating: "4.2",
      reviewCount: 128,
      bookingLink: "https://restaurant.example.com"
    }));
  }
  return [];
}

function getBestTimeToTravel(travelPlan) {
  return travelPlan.flightNotBooked
    ? "Based on historical trends, consider booking in Early September for lower fares."
    : null;
}

module.exports = {
  getVisaInfo,
  calculateDays,
  generateItineraryDays,
  getHotels,
  getRestaurants,
  getBestTimeToTravel
};