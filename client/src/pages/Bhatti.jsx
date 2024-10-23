import React from 'react'
import AnuCard from '../components/AnuCard';
import Banner from '../components/Banner';
import bannerImage from '/assets/images/banners/banner1.jpg'// Import the image file

function Bhatti() {
    const videoData = [
        {
          videoUrl: "https://www.youtube.com/embed/your_video_id_1",
          description: "This is the first YouTube video.",
          channelUrl: "https://www.youtube.com/channel/your_channel_id_1"
        },
        {
          videoUrl: "https://www.youtube.com/embed/your_video_id_2",
          description: "This is the second YouTube video.",
          channelUrl: "https://www.youtube.com/channel/your_channel_id_2"
        },
        {
          videoUrl: "https://www.youtube.com/embed/your_video_id_3",
          description: "This is the third YouTube video.",
          channelUrl: "https://www.youtube.com/channel/your_channel_id_3"
        }
      ];
  return (
    <>
    <Banner src={bannerImage} height='34rem'/>
      <div className="flex flex-wrap justify-center items-center gap-6 h-screen bg-gray-100 py-8">
      {videoData.map((video, index) => (
        <AnuCard
          key={index}
          videoUrl={video.videoUrl}
          description={video.description}
          channelUrl={video.channelUrl}
        />
      ))}
    </div>
    </>
  )
}

export default Bhatti