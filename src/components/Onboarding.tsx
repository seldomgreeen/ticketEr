import React, { useState } from 'react';
import { Ticket, Presentation, CreditCard, X, ShieldEllipsis} from 'lucide-react';

interface OnboardingProps {
  onClose: () => void;
}

export function Onboarding({ onClose }: OnboardingProps) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 500);
  };

  const features = [
    {
      icon: <ShieldEllipsis className="w-8 h-8 text-blue-400" />,
      title: "Scalper Prevention",
      description: "Tired of Scalpers? Us too. With our scalper prevention algorithms, you can be sure to get tickets at face value."  
    },
    {
      icon: <Presentation className="w-8 h-8 text-blue-400" />,
      title: "Award-Winning Promotion",
      description: "Promote your concerts and events to a wide audience with our targeted marketing tools."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-blue-400" />,
      title: "Support for Smaller Events",
      description: "We support smaller events and artists by creating fair contracts and providing them with the tools they need to succeed."
    }
  ];

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-transform duration-500 transform ${isClosing ? 'translate-y-full' : 'translate-y-0'}`}
    >
      <div className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${isClosing ? 'opacity-0' : 'opacity-100'}`} />
      
      <div className={`relative max-w-3xl w-full mx-4 bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 transition-all duration-500 transform ${isClosing ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-3">
            Welcome to <span className="text-blue-400">TicketEr</span>
          </h2>
          <p className="text-gray-300 text-base">
            Your one-stop destination for entertainment
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-xl bg-gray-700/50 hover:bg-gray-700/70 transition-colors backdrop-blur-sm"
            >
              <div className="inline-block p-2 bg-blue-500/10 rounded-xl mb-3">
                {feature.icon}
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center p-5 rounded-xl bg-gray-700/50 hover:bg-gray-700/70 backdrop-blur-sm mt-4 text-slate-200">
          <div className="flex items-center justify-center mb-3">
            <Ticket className="w-8 h-8 text-blue-400 mr-2" />
            <h2 className="text-xl font-bold text-white">
              Why <span className="text-blue-400">TicketEr?</span>
            </h2>
          </div>
          <p className="text-gray-300 text-sm">
            Our <span className="text-blue-300">competitors</span> have been known to work with scalpers to raise their fees. These companies use <span className="text-blue-300">predatory</span> tactics, limiting the decisions on prices, adding <span className="text-blue-300">unncessary</span> fees, and taking large cuts of ticket revenue from venues and events by <span className="text-blue-300">forcing</span> them to use their ticketing app in order to be promoted. Given their dominance in the industry, not using their app can severely <span className="text-blue-300">limit</span> an event's visibility and success. The team behind TicketEr has decided to speak out against the <span className="text-blue-300">unfairness</span> to these venues and events by creating a platform that is <span className="text-blue-300">fair</span> to both the event hoster and the consumer. We believe that the event should have the final say in the price of their tickets, and that the consumer should have the right to purchase tickets at face value. This is why, we guarantee fair price splits and <span className="text-blue-300">no hidden</span> fees. We will work with each and every venue/event to decide a custom revenue split which is <span className="text-blue-300">fair</span> to both parties. On top of this, we are introducing a <span className="text-blue-300">equitable</span> way to promote an event. Instead of limiting the visibility of an event based on the use of our ticketing app, we will work with the host of the event to promote their event separately from the ticketing process.
          </p>
        </div>

        <div className="mt-8 text-center">
          <button 
            onClick={handleClose}
            className="bg-transparent hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors border border-blue-600 hover:border-transparent animate-bounce"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}