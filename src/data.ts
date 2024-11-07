import { Event } from "./types";

export const events: Event[] = [
  {
    id: "1",
    title: "Travis Scott - Utopia",
    type: "concert",
    date: "2024-06-15",
    time: "7:00",
    venue: "Las Vegas Convention Center West Hall, Las Vegas, Nevada",
    image: "https://media.gettyimages.com/id/2163337950/photo/milan-italy-travis-scott-utopia-circus-maximus-world-tour-at-ippodromo-snai-la-maura-on.jpg?s=612x612&w=0&k=20&c=M_I6kTV_lZ3Dxd28fOAkZ3Gh4io58uWLtNB-LpJr3OY=",
    price: 199.99,
    availableSeats: 250,
    description: "Experience the musical journey through all of Taylor\"s eras in this spectacular concert event."
  },
  {
    id: "2",
    title: "Lakers vs. Warriors",
    type: "sports",
    date: "2024-05-20",
    time: "20:30",
    venue: "Crypto.com Arena, Los Angeles",
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&w=1200&q=80",
    price: 149.99,
    availableSeats: 120,
    description: "NBA Western Conference showdown between two legendary teams."
  },
  {
    id: "3",
    title: "Hamilton",
    type: "theatre",
    date: "2024-07-10",
    time: "7:30",
    venue: "Pantages Theatre, Hollywood",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80",
    price: 299.99,
    availableSeats: 75,
    description: "The revolutionary musical that changed Broadway forever returns."
  }
];