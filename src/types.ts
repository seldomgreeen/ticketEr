export interface Event {
  id: string;
  title: string;
  type: 'concert' | 'sports' | 'theatre';
  date: string;
  time: string;
  venue: string;
  image: string;
  price: number;
  availableSeats: number;
  description: string;
}

export interface CartItem {
  eventId: string;
  quantity: number;
}