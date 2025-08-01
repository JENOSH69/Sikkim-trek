// src/data/treks.js
import trek1 from "../assets/hero2.jpeg";
import trek2 from "../assets/hero2.jpeg";
import trek3 from "../assets/hero2.jpeg"; // Replace with different images later
import yambung1 from "../assets/yambung1.jpeg";
import yambung2 from "../assets/yambung2.jpeg";
import yambung3 from "../assets/yambung3.jpeg";

import singilila1 from "../assets/singilila1.jpeg";
import singilila2 from "../assets/singilila2.jpeg";
import singilila3 from "../assets/singilila3.jpeg";



const treks = [
  {
    id: "yambung-valley",
    name: "Yambung Valley Trek",
    image: trek1,
    duration: "11 Days",
    bestTime: "April - June",
    cost: "₹12,000",
    description:
      "The Yambung Valley Trek is a hidden gem in the Kanchenjunga region...",
    highestAltitude: "4,750m",
    difficulty: "Moderate - Difficult",
    suitableFor: "Experienced Trekkers",
    totalDistance: "75 km",
    baseCamp: "Yuksom",
    accommodation: "Tents & Homestays",
    region: "West Sikkim",
    gallery: [yambung1, yambung2, yambung3], // 👈 Add this

    itinerary: [
      {
        title: "Day 1: Drive from Siliguri to Yuksom",
        distance: "150 km",
        duration: "7–8 hours",
        stay: "Homestay in Yuksom",
        note: "Scenic drive through the Teesta valley and foothills of Sikkim.",
      },
      {
        title: "Day 2: Acclimatization and local exploration",
        distance: "5 km",
        duration: "3 hours",
        stay: "Homestay in Yuksom",
        note: "Short hike around Yuksom to acclimatize before the trek.",
      },
      {
        title: "Day 3: Manebhanjang to Tonglu",
        distance: "11 km",
        duration: "5 hours",
        stay: "Lodge in Tonglu",
        note: "Begin trek with a gradual uphill trail through forest.",
      },

      {
        title: "Day 4: Manebhanjang to Tonglu",
        distance: "11 km",
        duration: "5 hours",
        stay: "Lodge in Tonglu",
        note: "Begin trek with a gradual uphill trail through forest.",
      },

      {
        title: "Day 5: Manebhanjang to Tonglu",
        distance: "11 km",
        duration: "5 hours",
        stay: "Lodge in Tonglu",
        note: "Begin trek with a gradual uphill trail through forest.",
      },
      
      // Add more days as needed...
    ],
  },
  {
    id: "dzongri-goechala",
    name: "Dzongri Goechala Trek",
    image: trek2,
    duration: "8 Days",
    bestTime: "March - May & Oct - Dec",
    cost: "₹14,500",
    description: "The Dzongri Ridge Trek follows the Indo-Nepal border...",
    highestAltitude: "3,636m",
    difficulty: "Moderate",
    suitableFor: "Beginners & Nature Lovers",
    totalDistance: "52 km",
    baseCamp: "Manebhanjang",
    accommodation: "Lodges & Guesthouses",
    region: "South Sikkim",
    gallery: [singilila1, singilila2, singilila3], // 👈 Add this

    itinerary: [
      {
        title: "Day 1: Drive to Manebhanjang",
        distance: "90 km",
        duration: "4 hours",
        stay: "Guesthouse",
        note: "Drive through scenic hill roads to the base village.",
      },
      {
        title: "Day 2: Manebhanjang to Tonglu",
        distance: "11 km",
        duration: "5 hours",
        stay: "Lodge in Tonglu",
        note: "Begin trek with a gradual uphill trail through forest.",
      },

      {
        title: "Day 3: Manebhanjang to Tonglu",
        distance: "11 km",
        duration: "5 hours",
        stay: "Lodge in Tonglu",
        note: "Begin trek with a gradual uphill trail through forest.",
      },

      {
        title: "Day 4: Manebhanjang to Tonglu",
        distance: "11 km",
        duration: "5 hours",
        stay: "Lodge in Tonglu",
        note: "Begin trek with a gradual uphill trail through forest.",
      },

      {
        title: "Day 5: Manebhanjang to Tonglu",
        distance: "11 km",
        duration: "5 hours",
        stay: "Lodge in Tonglu",
        note: "Begin trek with a gradual uphill trail through forest.",
      },
      // Add more days as needed...
    ],
  },

  {
    id: "barsey-rhododendron",
    name: "Barsey Rhododendron Trek",
    image: trek2,
    duration: "8 Days",
    bestTime: "March - May & Oct - Dec",
    cost: "₹14,500",
    description: "The Barsey Rhondodendron Trek follows the Indo-Nepal border...",
    highestAltitude: "3,636m",
    difficulty: "Moderate",
    suitableFor: "Beginners & Nature Lovers",
    totalDistance: "52 km",
    baseCamp: "Manebhanjang",
    accommodation: "Lodges & Guesthouses",
    region: "South Sikkim",
    gallery: [singilila1, singilila2, singilila3], // 👈 Add this

    itinerary: [
      {
        title: "Day 1: Drive to Manebhanjang",
        distance: "90 km",
        duration: "4 hours",
        stay: "Guesthouse",
        note: "Drive through scenic hill roads to the base village.",
      },
      {
        title: "Day 2: Manebhanjang to Tonglu",
        distance: "11 km",
        duration: "5 hours",
        stay: "Lodge in Tonglu",
        note: "Begin trek with a gradual uphill trail through forest.",
      },

      {
        title: "Day 3: Manebhanjang to Tonglu",
        distance: "11 km",
        duration: "5 hours",
        stay: "Lodge in Tonglu",
        note: "Begin trek with a gradual uphill trail through forest.",
      },

      {
        title: "Day 4: Manebhanjang to Tonglu",
        distance: "11 km",
        duration: "5 hours",
        stay: "Lodge in Tonglu",
        note: "Begin trek with a gradual uphill trail through forest.",
      },

      {
        title: "Day 5: Manebhanjang to Tonglu",
        distance: "11 km",
        duration: "5 hours",
        stay: "Lodge in Tonglu",
        note: "Begin trek with a gradual uphill trail through forest.",
      },
      // Add more days as needed...
    ],
  },
  // Add more treks here if needed
];

export default treks;
