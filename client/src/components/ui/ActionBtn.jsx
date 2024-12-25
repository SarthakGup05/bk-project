import React from 'react';

const ActionButton = ({ icon: Icon, isActive, onClick, className, ...props }) => (
  <button
    className={`rounded-full shadow-lg ${className} ${
      isActive ? 'bg-red-50 text-red-500' : 'bg-white'
    }`}
    onClick={onClick}
    {...props}
  >
    <Icon className={`w-5 h-5 ${isActive ? 'fill-current' : ''}`} />
  </button>
);

export default ActionButton;
