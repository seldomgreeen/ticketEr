import React from 'react';
import { Music, Trophy, Theater } from 'lucide-react';

interface EventTypeMenuProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
}

export function EventTypeMenu({ selectedType, onTypeChange }: EventTypeMenuProps) {
  const types = [
    { value: 'all', label: 'All Events', icon: null },
    { value: 'concert', label: 'Concerts', icon: <Music className="w-4 h-4" /> },
    { value: 'sports', label: 'Sports', icon: <Trophy className="w-4 h-4" /> },
    { value: 'theatre', label: 'Theatre', icon: <Theater className="w-4 h-4" /> },
  ];

  return (
    <div className="flex items-center gap-2">
      {types.map(type => (
        <button
          key={type.value}
          onClick={() => onTypeChange(type.value)}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
            selectedType === type.value
              ? 'bg-blue-500 text-white'
              : 'bg-gray-700/30 text-gray-300 hover:bg-gray-700/50 hover:text-white'
          }`}
        >
          {type.icon}
          <span>{type.label}</span>
        </button>
      ))}
    </div>
  );
}