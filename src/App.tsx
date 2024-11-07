import React, { useState, useEffect } from 'react';
import {Search,Filter,Home,ShoppingCart as CartIcon,Info,} from 'lucide-react';
import { EventCard } from './components/EventCard';
import { Cart } from './components/Cart';
import { Onboarding } from './components/Onboarding';
import { events } from './data';
import { CartItem } from './types';
import { EventTypeMenu } from './components/EventTypeMenu';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    if (hasSeenOnboarding) {
      setShowOnboarding(false);
    }
  }, []);

  const handleCloseOnboarding = () => {
    localStorage.setItem('hasSeenOnboarding', 'true');
    setShowOnboarding(false);
  };

  const handleShowOnboarding = () => {
    setShowOnboarding(true);
  };
  const handleHomeClick = () => {
    setSearchTerm('');
    setSelectedType('all');
  };
  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || event.type === selectedType;
    return matchesSearch && matchesType;
  });

  const handleBuy = (eventId: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.eventId === eventId);
      if (existing) {
        return prev.map((item) =>
          item.eventId === eventId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { eventId, quantity: 1 }];
    });
    setShowCart(true);
  };

  const handleRemoveFromCart = (eventId: string) => {
    setCart((prev) => prev.filter((item) => item.eventId !== eventId));
  };

  const handleCheckout = () => {
    alert('Checkout functionality would be implemented here!');
    setCart([]);
    setShowCart(false);
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-900">
      {showOnboarding && <Onboarding onClose={handleCloseOnboarding} />}

      <header className="bg-gray-800/80 backdrop-blur-sm sticky top-5 z-40 border-b border-gray-700 rounded-3xl mr-2 ml-2">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <button onClick={handleHomeClick} className="text-2xl font-bold text-white">
                Ticket<span className="text-blue-400">Er</span>
              </button>
              <nav className="hidden md:flex items-center gap-6">
                <EventTypeMenu selectedType={selectedType} onTypeChange={setSelectedType}/>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <button onClick={handleShowOnboarding} className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-gray-700/50 flex items-center gap-2">
                <Info className="w-5 h-5"/>
                <span className="hidden sm:inline">Info</span>
              </button>
              <button onClick={() => setShowCart(true)} className="relative text-gray-300 hover:text-white p-2 rounded-lg hover:bg-gray-700/50">
                <CartIcon className="w-6 h-6" />
                {cartItemCount > 0 && (<span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">{cartItemCount}</span>)}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 mt-2">
        <div className="relative flex-1 mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search events or venues..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (<EventCard key={event.id} event={event} onBuy={handleBuy} />))}
        </div>

        {showCart && (
          <Cart
            items={cart}
            onRemove={handleRemoveFromCart}
            onCheckout={handleCheckout}
            onClose={() => setShowCart(false)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
