import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

const VideoBanner = ({ videoSrc }) => {
  const videoRef = useRef(null); // Create a reference for the video element
  const [isPlaying, setIsPlaying] = useState(false); // State to track if the video is playing

  const handleVideoClick = () => {
    if (isPlaying) {
      videoRef.current.pause(); // Pause the video if it's playing
    } else {
      videoRef.current.play(); // Play the video if it's paused
    }
    setIsPlaying(!isPlaying); // Toggle the play state
  };

  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
        src={videoSrc}
        loop
        playsInline
        onClick={handleVideoClick} // Trigger play/pause on click
      />
      {!isPlaying && (
        <div className="absolute inset-0 flex justify-center items-center">
          <button
            onClick={handleVideoClick}
            className="text-white  bg-opacity-50 px-4 py-2 play-btn rounded"
          >
            <div className="circle">
              <span className="material-icons ms-2">
                {" "}
                <FaPlay size={40} />
              </span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoBanner;
