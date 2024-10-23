import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css'; // Import the lightbox styles

const GalleryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  // Dummy data based on categories
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

  // State to store the currently selected category
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');
  const [isOpen, setIsOpen] = useState(false); // State for lightbox open
  const [photoIndex, setPhotoIndex] = useState(0); // State for tracking the current image

  // Function to handle category changes
  const handleFilterChange = (newCategory) => {
    setSelectedCategory(newCategory);
    navigate(`/gallery/${newCategory}`); // Update the URL to match the selected category
  };

  // If 'all' is selected, show all images; otherwise, show the selected category's images
  const galleryItems =
    selectedCategory === 'all' ? allImages : galleries[selectedCategory] || [];

  // Function to handle image click and open the lightbox
  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div>
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-center my-8">
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

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:-translate-y-2 cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <img src={item.src} alt={item.alt} className="w-full h-auto rounded-md" />
          </div>
        ))}
      </div>

      {/* Lightbox for image viewing */}
      {isOpen && (
        <Lightbox
          slides={galleryItems.map(item => ({ src: item.src, alt: item.alt }))}
          index={photoIndex}
          onClose={() => setIsOpen(false)}
          onPrev={() => setPhotoIndex((photoIndex - 1 + galleryItems.length) % galleryItems.length)}
          onNext={() => setPhotoIndex((photoIndex + 1) % galleryItems.length)}
        />
      )}
    </div>
  );
};

export default GalleryPage;
