import React from 'react';

const MurliTextSection = ({ sectionTitle, content }) => (
  <div className="mb-6 w-40">
    <h2 className="text-lg font-semibold text-gray-700 mb-2">{sectionTitle}</h2>
    {content.map((paragraph, index) => (
      <p key={index} className="text-gray-800 leading-relaxed mb-2">{paragraph}</p>
    ))}
  </div>
);

export default MurliTextSection;
