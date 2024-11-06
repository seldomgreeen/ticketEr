import React from 'react';
import { Ticket, Calendar, CreditCard, X } from 'lucide-react';

interface OnboardingProps {
  onClose: () => void;
}

export function Onboarding({ onClose }: OnboardingProps) {
  const features = [
    {
      icon: <Ticket className="w-8 h-8 text-blue-400" />,
      title: "Easy Booking",
      description: "Browse and book tickets for your favorite events in seconds"
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-400" />,
      title: "Live Updates",
      description: "Get real-time updates on ticket availability and event schedules"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-blue-400" />,
      title: "Secure Payments",
      description: "Safe and encrypted transactions for peace of mind"
    }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=2000&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm" />
      
      <div className="relative max-w-2xl w-full mx-4 bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Welcome to <span className="text-blue-400">TicketEr</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Your one-stop destination for all entertainment tickets
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gray-700/50 hover:bg-gray-700/70 transition-colors backdrop-blur-sm"
            >
              <div className="inline-block p-3 bg-blue-500/10 rounded-xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
