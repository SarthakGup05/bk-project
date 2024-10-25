import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Masonry from 'react-masonry-css'; // Import Masonry layout

const MissionaryGallery = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  // Gallery data categorized by topic
  const galleries = {
    yoga: [
      { src: '/assets/images/_yoga/8.png', alt: 'Yoga Image 1' },
      { src: '/assets/images/_yoga/9.png', alt: 'Yoga Image 1' },
      { src: '/assets/images/_yoga/10.png', alt: 'Yoga Image 1' },
    ],
    winner: [
      { src: '/assets/images/winners/1.png', alt: 'Winner Image 1' },
      { src: '/assets/images/winners/2.png', alt: 'Winner Image 2' },
      { src: '/assets/images/winners/3.png', alt: 'Winner Image 3' },
      { src: '/assets/images/winners/4.png', alt: 'Winner Image 4' },
      { src: '/assets/images/winners/5.png', alt: 'Winner Image 5' },
    ],
    ngo: [
      { src: '/assets/images/_ngo/6.png', alt: 'NGO Image 1' },
      { src: '/assets/images/_ngo/7.png', alt: 'NGO Image 2' },
    ],
  };

  // Combining all categories into one array for 'all'
  const allImages = [...galleries.yoga, ...galleries.winner, ...galleries.ngo];

  // State for currently selected category
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');

  // Function to handle category change
  const handleFilterChange = (newCategory) => {
    setSelectedCategory(newCategory);
    navigate(`/gallery/${newCategory}`);
  };

  // Determine gallery items to display
  const galleryItems = selectedCategory === 'all' ? allImages : galleries[selectedCategory] || [];

  // Define breakpoints for Masonry layout (columns change at these screen widths)
  const breakpointColumnsObj = {
    default: 3, // 3 columns by default
    1100: 2,    // 2 columns at screens wider than 1100px
    700: 1,     // 1 column at screens smaller than 700px
  };

  return (
    <div className="container mx-auto p-8">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-8">
        {selectedCategory === 'all'
          ? 'All'
          : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}{' '}
        Pictures
      </h1>

      {/* Filter Buttons */}
      <div className="flex justify-center mb-8">
        <button
          className={`px-4 py-2 mx-2 rounded-md transition-colors ${
            selectedCategory === 'all' ? 'bg-[#F7B777] text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleFilterChange('all')}
        >
          All Pictures
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded-md transition-colors ${
            selectedCategory === 'yoga' ? 'bg-[#F7B777] text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleFilterChange('yoga')}
        >
          Yoga Pictures
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded-md transition-colors ${
            selectedCategory === 'winner' ? 'bg-[#F7B777] text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleFilterChange('winner')}
        >
          Winner Pictures
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded-md transition-colors ${
            selectedCategory === 'ngo' ? 'bg-[#F7B777] text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleFilterChange('ngo')}
        >
          NGO Pictures
        </button>
      </div>

      {/* Masonry Grid Layout */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 mb-4 transform transition-transform hover:-translate-y-2 cursor-pointer"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default MissionaryGallery;
