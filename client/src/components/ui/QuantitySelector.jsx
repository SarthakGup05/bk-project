import React from 'react';

const QuantitySelector = ({ quantity, onIncrease, onDecrease }) => (
  <div className="flex items-center space-x-4">
    <button
      onClick={onDecrease}
      className="rounded-full border px-3 py-1"
    >
      -
    </button>
    <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
    <button
      onClick={onIncrease}
      className="rounded-full border px-3 py-1"
    >
      +
    </button>
  </div>
);

export default QuantitySelector;
