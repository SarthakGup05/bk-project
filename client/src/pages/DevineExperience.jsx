import React, { useState } from 'react';

const DevineExperience = () => {
  const [activeFilter, setActiveFilter] = useState('images'); // State to switch between images and videos
  const [visibleItems, setVisibleItems] = useState(6); // State to control visible items

  // Image and Video Data
  const imageData = [
    { src: '/assets/images/devine/experience.jpg', alt: 'Image 1' },
    { src: '/assets/images/devine/experience.jpg', alt: 'Image 2' },
    { src: '/assets/images/devine/experience.jpg', alt: 'Image 3' },
    { src: '/assets/images/devine/experience.jpg', alt: 'Image 4' },
    { src: '/assets/images/devine/experience.jpg', alt: 'Image 5' },
    { src: '/assets/images/devine/experience.jpg', alt: 'Image 6' },
    { src: '/assets/images/devine/experience.jpg', alt: 'Image 7' },
    { src: '/assets/images/devine/experience.jpg', alt: 'Image 8' },
  ];

  const videoData = [
    { url: 'https://www.youtube.com/embed/your_video_1', title: 'Video 1' },
    { url: 'https://www.youtube.com/embed/your_video_2', title: 'Video 2' },
    { url: 'https://www.youtube.com/embed/your_video_3', title: 'Video 3' },
    { url: 'https://www.youtube.com/embed/your_video_4', title: 'Video 4' },
    { url: 'https://www.youtube.com/embed/your_video_5', title: 'Video 5' },
    { url: 'https://www.youtube.com/embed/your_video_6', title: 'Video 6' },
    { url: 'https://www.youtube.com/embed/your_video_7', title: 'Video 7' },
    { url: 'https://www.youtube.com/embed/your_video_8', title: 'Video 8' },
  ];

  const handleSeeMore = () => {
    // Increase the number of visible items by 6 more
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };

  const handleSeeLess = () => {
    // Reset visible items back to initial (6)
    setVisibleItems(6);
  };

  const currentData = activeFilter === 'images' ? imageData : videoData;
  const showMoreButton = visibleItems < currentData.length;

  return (
    <div className="container mx-auto p-6">
      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-8 mt-32">
        <button
          onClick={() => { setActiveFilter('images'); setVisibleItems(6); }}
          className={`px-6 py-3 rounded-full font-semibold shadow-md transition-all border-2 ${activeFilter === 'images' ? 'bg-orange-600 border-orange-600 text-white' : 'bg-white border-gray-300 text-gray-700 hover:bg-orange-100 hover:border-orange-400 hover:text-orange-600'}`}
        >
          Images
        </button>
        <button
          onClick={() => { setActiveFilter('videos'); setVisibleItems(6); }}
          className={`px-6 py-3 rounded-full font-semibold shadow-md transition-all border-2 ${activeFilter === 'videos' ? 'bg-orange-600 border-orange-600 text-white' : 'bg-white border-gray-300 text-gray-700 hover:bg-orange-100 hover:border-orange-400 hover:text-orange-600'}`}
        >
          Videos
        </button>
      </div>

      {/* Conditionally Render Image or Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {activeFilter === 'images'
          ? imageData.slice(0, visibleItems).map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform transform hover:scale-105 duration-300"
                />
              </div>
            ))
          : videoData.slice(0, visibleItems).map((video, index) => (
              <div key={index} className="rounded-lg shadow-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="315"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-64"
                ></iframe>
              </div>
            ))}
      </div>

      {/* See More / See Less Button */}
      <div className="flex justify-center mt-6">
        {showMoreButton ? (
          <button
            onClick={handleSeeMore}
            className="px-6 py-2 bg-orange-600 text-white rounded-full shadow-md hover:bg-orange-500"
          >
            See More
          </button>
        ) : (
          visibleItems > 6 && (
            <button
              onClick={handleSeeLess}
              className="px-6 py-2 bg-gray-300 text-gray-700 rounded-full shadow-md hover:bg-gray-200"
            >
              See Less
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default DevineExperience;
