import React from 'react';

const FormatSelector = ({ formats, selectedFormat, onSelect }) => (
  <div className="grid grid-cols-3 gap-4">
    {formats.map(({ id, label, icon: Icon }) => (
      <button
        key={id}
        onClick={() => onSelect(id)}
        className={`p-4 rounded-xl border-2 transition-all ${
          selectedFormat === id
            ? 'border-blue-600 bg-blue-50'
            : 'border-gray-200 hover:border-gray-300'
        }`}
      >
        <Icon
          className={`w-6 h-6 mx-auto mb-2 ${
            selectedFormat === id ? 'text-blue-600' : 'text-gray-500'
          }`}
        />
        <span
          className={`block text-sm font-medium ${
            selectedFormat === id ? 'text-blue-600' : 'text-gray-700'
          }`}
        >
          {label}
        </span>
      </button>
    ))}
  </div>
);

export default FormatSelector;
