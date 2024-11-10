import React from 'react';

const Track = ({ activeSong }) => (
  <div className="flex-1 flex items-center justify-start">
    <div className="hidden sm:block h-16 w-16 mr-4">
      <img
        src={activeSong?.images?.coverart || '/default-cover.png'}  // Placeholder if no cover art
        alt="cover art"
        className="rounded-full"
      />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-white font-bold text-lg">
        {activeSong?.title || 'No active Song'}
      </p>
      <p className="truncate text-gray-300">
        {activeSong?.subtitle || 'No artist information'}
      </p>
    </div>
  </div>
);

export default Track;
