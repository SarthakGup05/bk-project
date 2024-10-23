import React from 'react';

const AnuCard = ({ videoUrl, description, channelUrl }) => {
  return (
    <div 
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={() => window.open(channelUrl, "_blank")} // Redirect to YouTube channel on click
    >
      {/* Embedded YouTube Video */}
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-full rounded-t-lg"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Description */}
      <div className="p-4">
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default AnuCard;
