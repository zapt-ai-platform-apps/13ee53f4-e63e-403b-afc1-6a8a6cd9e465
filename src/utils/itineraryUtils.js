export function generateItinerary(travelPlan) {
  const { nationality, destination, tripDuration } = travelPlan;
  const visaRequired = nationality.toLowerCase() !== destination.toLowerCase();
  const days = parseInt(tripDuration, 10) || 1;
  const baseLat = 51.505;
  const baseLng = -0.09;
  const itineraryDays = Array.from({ length: days }, (_, i) => ({
    day: i + 1,
    details: `Day ${i + 1}: Explore local attractions and enjoy local cuisine.`,
    // Simulated route coordinates for the day
    route: [
      [baseLat + i * 0.005, baseLng + i * 0.005],
      [baseLat + i * 0.005 + 0.005, baseLng + i * 0.005 + 0.005]
    ]
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