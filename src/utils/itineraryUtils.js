export function generateItinerary(travelPlan) {
  const { nationality, destination, startDate, endDate, restaurantPreferences } = travelPlan;
  const visaRequired = nationality.toLowerCase() !== destination.toLowerCase();

  let days = 1;
  if(startDate && endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  const baseLat = 51.505;
  const baseLng = -0.09;
  const itineraryDays = Array.from({ length: days }, (_, i) => ({
    day: i + 1,
    details: `Day ${i + 1}: Explore local attractions and enjoy local cuisine.`,
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

  const restaurants = (restaurantPreferences && restaurantPreferences.length > 0) ? 
    restaurantPreferences.map(pref => ({
      name: `${pref} Delight`,
      price: "$50 approx.",
      bookingLink: "https://restaurant.example.com"
    })) : [];

  return { itineraryDays, visaRequired, hotels, restaurants };
}