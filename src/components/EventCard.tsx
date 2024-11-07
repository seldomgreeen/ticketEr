import React from 'react';
import { Calendar, MapPin, Ticket } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
  onBuy: (eventId: string) => void;
}

export function EventCard({ event, onBuy }: EventCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] border border-gray-700 flex flex-col h-full">
      <div className="relative h-48">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover"/>
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
          ${event.price}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm text-blue-400 mb-2">
            <span className="px-3 py-1 rounded-full bg-blue-500/10">{event.type}</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-400">{event.availableSeats} seats left</span>
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
          <div className="space-y-2">
            <div className="flex items-center text-gray-400">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm">{event.date} at {event.time}</span>
            </div>
            <div className="flex items-center text-gray-400">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">{event.venue}</span>
            </div>
          </div>
        </div>
        <button onClick={() => onBuy(event.id)} className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors mt-4">
          <Ticket className="w-5 h-5" />
          Buy Tickets
        </button>
      </div>
    </div>
  );
}