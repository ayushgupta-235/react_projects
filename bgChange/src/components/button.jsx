import React from 'react';

// Mapping of color names to Tailwind CSS classes
const colorClasses = {
  red: {
    bg: 'bg-red-500',
    hover: 'hover:bg-red-600',
  },
  blue: {
    bg: 'bg-blue-500',
    hover: 'hover:bg-blue-600',
  },
  green: {
    bg: 'bg-green-500',
    hover: 'hover:bg-green-600',
  },
  yellow: {
    bg: 'bg-yellow-500',
    hover: 'hover:bg-yellow-600',
  },
};

function Button({ colorName, setColor }) {
  const color = colorName.toLowerCase();
  const { bg, hover } = colorClasses[color];

  return (
    <button
      onClick={() => setColor(color)}
      className={`${bg} ${hover} text-white px-4 py-2 rounded-lg shadow-md`}
    >
      {colorName}
    </button>
  );
}

export default Button;