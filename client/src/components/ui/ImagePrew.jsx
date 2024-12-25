import React from 'react';

const ImagePreview = ({ src, alt, onClick }) => (
  <div
    className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
    onClick={onClick}
  >
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);

export default ImagePreview;
