import React from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { CartItem } from '../types';
import { events } from '../data';

interface CartProps {
  items: CartItem[];
  onRemove: (eventId: string) => void;
  onCheckout: () => void;
  onClose: () => void;
}

export function Cart({ items, onRemove, onCheckout, onClose }: CartProps) {
  const total = items.reduce((sum, item) => {
    const event = events.find(e => e.id === item.eventId);
    return sum + (event?.price ?? 0) * item.quantity;
  }, 0);

  if (items.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-end">
      <div className="w-full sm:w-96 bg-gray-800 sm:mr-8 sm:rounded-xl shadow-2xl p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-blue-400" />
            <h3 className="font-semibold text-white">Your Cart</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="space-y-3 mb-4">
          {items.map(item => {
            const event = events.find(e => e.id === item.eventId);
            if (!event) return null;
            
            return (
              <div key={item.eventId} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-white">{event.title}</p>
                  <p className="text-sm text-gray-400">{item.quantity} × ${event.price}</p>
                </div>
                <button
                  onClick={() => onRemove(item.eventId)}
                  className="text-gray-400 hover:text-red-400"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            );
          })}
        </div>
        
        <div className="border-t border-gray-700 pt-4">
          <div className="flex justify-between mb-4">
            <span className="font-semibold text-white">Total:</span>
            <span className="font-semibold text-white">${total.toFixed(2)}</span>
          </div>
          <button
            onClick={onCheckout}
            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}