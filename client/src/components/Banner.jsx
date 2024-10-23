import React from 'react';

const Banner = ({ src, altText, width = '100%', height = '16rem' }) => {
  return (
    <div 
      className="flex flex-col justify-center items-center text-center"
      style={{ width, height }} // Dynamically setting width and height
    >
      <img 
        src={src} 
        alt={altText} 
        className="w-full h-full object-cover" // Ensures the image covers the container
      />
    </div>
  );
};

export default Banner;
