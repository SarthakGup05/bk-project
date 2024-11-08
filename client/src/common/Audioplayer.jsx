import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaExpand, FaCompress, FaTimes } from "react-icons/fa";

function AudioPlayer({ audioData, onClose, autoPlay, isVisible, isFullScreen, onFullScreenToggle, isPlaying, onPlay, onStop }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  useEffect(() => {
    if (autoPlay && audioRef.current) {
      audioRef.current.play();
    }
  }, [audioData, autoPlay]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    if (isPlaying) {
      onStop();
    } else {
      onPlay();
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Card View */}
      {!isFullScreen && (
        <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg flex flex-col space-y-2 relative w-full max-w-md mx-auto transition-all duration-300 ease-in-out">
          {/* Song Details and Lyrics */}
          <div className="flex flex-col items-center mb-6 space-y-4">
            <h3 className="text-xl font-semibold text-center">{audioData.title}</h3>
            {audioData.subtitles ? (
              <div className="h-24 overflow-y-auto text-center animate-pulse text-md leading-relaxed">
                <p>{audioData.subtitles}</p>
              </div>
            ) : (
              <p className="text-md leading-relaxed">No Lyrics Available</p>
            )}
          </div>

          {/* Audio Control Bar */}
          <div className="flex items-center w-full mt-2 space-x-3">
            <button
              onClick={handlePlayPause}
              className="text-white transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
            </button>
            <div className="flex-1">
              <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={(e) => (audioRef.current.currentTime = e.target.value)}
                className="w-full h-2 bg-gray-400 rounded-full appearance-none cursor-pointer"
              />
            </div>
            <button onClick={onFullScreenToggle} className="text-white">
              <FaExpand size={20} />
            </button>
          </div>
          <audio ref={audioRef} src={audioData.url} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata} />
        </div>
      )}

      {/* Full-Screen View */}
      {isFullScreen && (
        <div className="fixed inset-0 bg-black text-white p-8 transition-all flex flex-col items-center justify-center z-50">
          {/* Audio Element for Full-Screen Mode */}
          <audio
            ref={audioRef}
            src={audioData.url}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          />

          {/* Close Button for Full-Screen Mode */}
          <button onClick={onFullScreenToggle} className="absolute top-4 right-4 text-white">
            <FaTimes size={24} />
          </button>

          {/* Song Details and Lyrics */}
          <div className="flex flex-col items-center mb-6 space-y-4">
            <h3 className="text-2xl font-semibold">{audioData.title}</h3>
            {audioData.subtitles ? (
              <div className="h-48 overflow-y-auto text-center animate-pulse text-lg leading-relaxed">
                <p>{audioData.subtitles}</p>
              </div>
            ) : (
              <p className="text-lg leading-relaxed">No Lyrics Available</p>
            )}
          </div>

          {/* Audio Controls in Full-Screen Mode */}
          <div className="flex items-center justify-between w-full max-w-lg space-x-4 mb-4">
            <button onClick={handlePlayPause} className="transition-transform duration-300 ease-in-out transform hover:scale-110">
              {isPlaying ? <FaPause size={30} /> : <FaPlay size={30} />}
            </button>

            <div className="flex-1">
              <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={(e) => (audioRef.current.currentTime = e.target.value)}
                className="w-full h-2 bg-gray-400 rounded-full appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Volume Control */}
            <div className="flex items-center space-x-2">
              <FaVolumeUp size={24} />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 h-2 bg-gray-400 rounded-full appearance-none cursor-pointer"
              />
            </div>

            <button onClick={onFullScreenToggle} className="transition-transform duration-300 ease-in-out transform hover:scale-110">
              {isFullScreen ? <FaCompress size={24} /> : <FaExpand size={24} />}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AudioPlayer;
