import React, { useState } from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import { FaPlay } from "react-icons/fa";
import AboutUS from "/assets/Aboutus banner.jpg";
import SampleVideo from "/assets/Introduction_Brahma_Kumaris_082bb0de77.mp4";
import ThumbnailImage from "/assets/lq_om-shanti-bhawan-brahma-kumaris_17564636328_o-1-1-e1634736475216.jpg"; // Use your thumbnail image path here

const AboutUs = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <>
      {/* Render the Banner and About components */}
      <Banner src={AboutUS} />
      <About />

      {/* Main content section with left-side text and right-side video */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start px-4 lg:px-16 py-8 gap-8">
        {/* Left side: Additional written content */}
        <div className="lg:w-1/2 w-full p-4 text-gray-800">
          <h2 className=" font-bold mb-4 text-3xl">
            Vision of the Angel of Shiva
          </h2>
          <p className="text-lg font-semibold leading-relaxed">
            The vision of the Angel of Shiva is that every person in the world
            reads the Paramatma Shiv Mahavakya (Avyakt Vani) and adopts a
            healthy fruit diet, which aids in awakening the soul and fostering
            discipline in life. This supports the spiritual journey of the soul,
            encouraging love for nature and the protection of the environment
            filled with positive thoughts. Every human soul becomes a beacon of
            positivity, causing no harm through thoughts (Mansa), words (Vacha),
            or actions (Karmana). Each individual cultivates a positive aura,
            and together, these auras create a harmonious and
            vibrant environment
          </p>
        </div>

        {/* Right side: Video or thumbnail with play button */}
        <div className="lg:w-1/2 w-full flex justify-center items-center p-4 relative">
          {isPlaying ? (
            <video
              src={SampleVideo}
              controls
              autoPlay
              className="w-full h-80 lg:h-96 rounded-lg shadow-lg"
            />
          ) : (
            <div
              className="relative w-full h-auto cursor-pointer"
              onClick={handlePlay}
            >
              <img
                src={ThumbnailImage}
                alt="Video Thumbnail"
                className="w-full h-96 rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <FaPlay className="text-white text-5xl bg-black bg-opacity-50 p-4 rounded-full" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
