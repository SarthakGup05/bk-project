import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-video.css';

const MissionaryGallery = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const galleries = {
    yoga: [
      { src: '/assets/images/_yoga/8.png', thumb: '/assets/images/_yoga/8.png', alt: 'Yoga Image 1' },
      { src: '/assets/images/_yoga/9.png', thumb: '/assets/images/_yoga/9.png', alt: 'Yoga Image 2' },
      { src: '/assets/images/_yoga/10.png', thumb: '/assets/images/_yoga/10.png', alt: 'Yoga Image 3' },
    ],
    winner: [
      { src: '/assets/images/winners/1.png', thumb: '/assets/images/winners/1.png', alt: 'Winner Image 1' },
      { src: '/assets/images/winners/2.png', thumb: '/assets/images/winners/2.png', alt: 'Winner Image 2' },
      { src: '/assets/images/winners/3.png', thumb: '/assets/images/winners/3.png', alt: 'Winner Image 3' },
      { src: '/assets/images/winners/4.png', thumb: '/assets/images/winners/4.png', alt: 'Winner Image 4' },
      { src: '/assets/images/winners/5.png', thumb: '/assets/images/winners/5.png', alt: 'Winner Image 5' },
    ],
    ngo: [
      { src: '/assets/images/_ngo/6.png', thumb: '/assets/images/_ngo/6.png', alt: 'NGO Image 1' },
      { src: '/assets/images/_ngo/7.png', thumb: '/assets/images/_ngo/7.png', alt: 'NGO Image 2' },
    ],
  };

  const allImages = [...galleries.yoga, ...galleries.winner, ...galleries.ngo];
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');

  const handleFilterChange = (newCategory) => {
    setSelectedCategory(newCategory);
    navigate(`/gallery/${newCategory}`);
  };

  const galleryItems = selectedCategory === 'all' ? allImages : galleries[selectedCategory] || [];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        {selectedCategory === 'all'
          ? 'All'
          : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}{' '}
        Pictures
      </h1>

      <div className="flex justify-center mb-8 mt-16">
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

      <LightGallery plugins={[lgZoom, lgVideo]} elementClassNames="custom-class-name">
        {galleryItems.map((item, index) => (
          <a key={index} data-lg-size="1400-933" className="gallery-item" data-src={item.src}>
            <img
              src={item.thumb}
              alt={item.alt}
              className="w-60 h-auto rounded-md object-cover mb-4 pl-4 max-lg:w-72"
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
};

export default MissionaryGallery;
