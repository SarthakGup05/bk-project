import React, { useState } from "react";
import AudioPlayer from "../common/Audioplayer";

function RajyogCommentry() {
  const [activeFilter, setActiveFilter] = useState("audio");
  const [visibleItems, setVisibleItems] = useState(6);
  const [playingAudioId, setPlayingAudioId] = useState(null);
  const [fullScreenAudioId, setFullScreenAudioId] = useState(null); // Track full-screen audio ID

  const audioData = [
    { 
      id: 1, 
      url: "https://samplelib.com/lib/preview/mp3/sample-3s.mp3", 
      title: "Sample Audio 1", 
      subtitles: "This is a dummy lyric for Sample Audio 1. It is just a placeholder. La la la, let's sing along!"
    },
    { 
      id: 2, 
      url: "https://samplelib.com/lib/preview/mp3/sample-6s.mp3", 
      title: "Sample Audio 2", 
      subtitles: "Here comes another set of dummy lyrics. Sample Audio 2 is just the same. Bum bum bum, feel the beat!"
    },
    { 
      id: 3, 
      url: "https://samplelib.com/lib/preview/mp3/sample-9s.mp3", 
      title: "Sample Audio 3", 
      subtitles: "This is the third set of dummy lyrics. For Sample Audio 3, it's all in fun. Do do do, just vibe along!"
    },
  ];
  

  const videoData = [
    { url: "https://www.youtube.com/embed/video1", title: "Sample Video 1" },
    { url: "https://www.youtube.com/embed/video2", title: "Sample Video 2" },
  ];

  const handleSeeMore = () => setVisibleItems(visibleItems + 6);
  const handleSeeLess = () => setVisibleItems(6);

  return (
    <div className="container mx-auto p-6">
      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-8 mt-32">
        <button onClick={() => setActiveFilter("audio")} className={`px-6 py-3 rounded-full ${activeFilter === "audio" ? "bg-orange-600 text-white" : "bg-gray-300"}`}>
          Audio
        </button>
        <button onClick={() => setActiveFilter("videos")} className={`px-6 py-3 rounded-full ${activeFilter === "videos" ? "bg-orange-600 text-white" : "bg-gray-300"}`}>
          Videos
        </button>
      </div>

      {/* Audio or Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {activeFilter === "audio" && audioData.slice(0, visibleItems).map((audio) => (
          fullScreenAudioId === null || fullScreenAudioId === audio.id ? ( // Only show the expanded audio or the normal audio grid
            <AudioPlayer
              key={audio.id}
              audioData={{
                url: audio.url,
                title: audio.title,
                cover: "https://link_to_cover_image.jpg",
                subtitles: audio.subtitles,
              }}
              isPlaying={playingAudioId === audio.id}
              onPlay={() => setPlayingAudioId(audio.id)}
              onStop={() => setPlayingAudioId(null)}
              isFullScreen={fullScreenAudioId === audio.id}
              onFullScreenToggle={() => setFullScreenAudioId(fullScreenAudioId === audio.id ? null : audio.id)}
              isVisible={true}
            />
          ) : null
        ))}

        {activeFilter === "videos" && videoData.slice(0, visibleItems).map((video, index) => (
          <div key={index} className="rounded-lg shadow-lg overflow-hidden">
            <iframe width="100%" height="315" src={video.url} title={video.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        ))}
      </div>

      {/* See More / See Less Button */}
      <div className="flex justify-center mt-6">
        {visibleItems < (activeFilter === "audio" ? audioData : videoData).length ? (
          <button onClick={handleSeeMore} className="px-6 py-2 bg-orange-600 text-white rounded-full">See More</button>
        ) : (
          visibleItems > 6 && <button onClick={handleSeeLess} className="px-6 py-2 bg-gray-300 text-gray-700 rounded-full">See Less</button>
        )}
      </div>
    </div>
  );
}

export default RajyogCommentry;
