export function generateItinerary(travelPlan) {
  const { nationality, destination, tripDuration } = travelPlan;
  const visaRequired = nationality.toLowerCase() !== destination.toLowerCase();
  const days = parseInt(tripDuration, 10) || 1;
  const itineraryDays = Array.from({ length: days }, (_, i) => ({
    day: i + 1,
    details: `Day ${i + 1}: Explore local attractions and enjoy local cuisine.`
  }));
  const hotels = [
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
  return { itineraryDays, visaRequired, hotels };
}