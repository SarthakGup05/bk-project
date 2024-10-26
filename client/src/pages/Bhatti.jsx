import React, { useState } from 'react';
import AnuCard from '../components/AnuCard';
import Banner from '../components/Banner';
import bannerImage from '/assets/images/banners/banner1.jpg';

function Bhatti() {
  const [activeFilter, setActiveFilter] = useState('all'); // Filter state
  const [visibleCount, setVisibleCount] = useState(6); // To show more videos

  // Example video data with categories for filtering
  const videoData = [
    {
      videoUrl: "https://www.youtube.com/embed/your_video_id_1",
      description: "This is the first YouTube video.",
      channelUrl: "https://www.youtube.com/channel/your_channel_id_1",
      category: "Category1",
    },
    {
      videoUrl: "https://www.youtube.com/embed/your_video_id_2",
      description: "This is the second YouTube video.",
      channelUrl: "https://www.youtube.com/channel/your_channel_id_2",
      category: "Category2",
    },
    {
      videoUrl: "https://www.youtube.com/embed/your_video_id_3",
      description: "This is the third YouTube video.",
      channelUrl: "https://www.youtube.com/channel/your_channel_id_3",
      category: "Category1",
    },
    // Add more videos as needed
  ];

  // Filtered video list based on active filter
  const filteredVideos = videoData.filter(video =>
    activeFilter === 'all' || video.category === activeFilter
  );

  // Function to handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setVisibleCount(6); // Reset visible count when filter changes
  };

  // Load more videos
  const loadMoreVideos = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <>
      <Banner src={bannerImage} height='34rem' />

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-8 mt-4">
        {['all', 'Category1', 'Category2', 'Category3'].map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterChange(filter)}
            className={`px-6 py-3 rounded-full font-semibold shadow-md transition-all border-2 ${
              activeFilter === filter
                ? 'bg-orange-600 border-orange-600 text-white'
                : 'bg-white border-gray-300 text-gray-700 hover:bg-orange-100 hover:border-orange-400 hover:text-orange-600'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Video List */}
      <div className="flex flex-wrap justify-center items-center gap-6 bg-gray-100 py-8">
        {filteredVideos.slice(0, visibleCount).map((video, index) => (
          <AnuCard
            key={index}
            videoUrl={video.videoUrl}
            description={video.description}
            channelUrl={video.channelUrl}
          />
        ))}
      </div>

      {/* "See More" Button */}
      {visibleCount < filteredVideos.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMoreVideos}
            className="px-6 py-3 bg-orange-600 text-white rounded-full shadow-md transition-all hover:bg-orange-500"
          >
            See More
          </button>
        </div>
      )}
    </>
  );
}

export default Bhatti;
