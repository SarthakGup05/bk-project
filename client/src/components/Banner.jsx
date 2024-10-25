import React from 'react';

const Banner = ({ src, altText, width = '100%', height = '16rem' }) => {
  return (
    <div 
      className="flex flex-col justify-center items-center text-center mt-24 sm:mt-20 md:mt-32"
      style={{ width }}
    >
      <img 
        src={src} 
        alt={altText} 
        className="w-full object-cover"
        style={{
          height: `auto`, // Auto height for responsive resizing
          maxHeight: height, // Max height to avoid overflow
        }}
      />
    </div>
  );
};

export default Banner;
