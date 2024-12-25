import React from 'react';
import { Star } from 'lucide-react';

const RatingStars = ({ rating, maxStars = 5 }) => (
  <div className="flex">
    {[...Array(maxStars)].map((_, i) => (
      <Star
        key={i}
        className="w-5 h-5"
        fill={i < rating ? "currentColor" : "none"}
        color={i < rating ? "#FCD34D" : "#E5E7EB"}
      />
    ))}
  </div>
);

export default RatingStars;
