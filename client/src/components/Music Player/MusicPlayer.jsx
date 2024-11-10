import React, { useState, useEffect } from 'react';
import Controls from './Control';

import Seekbar from './Seekbar';
import Track from './Track';
import VolumeBar from './Volume';

const MusicPlayer = ({ songs, activeSong, setActiveSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);

  useEffect(() => {
    setActiveSong(songs[currentIndex]); // Update the active song when the index changes
  }, [currentIndex, songs, setActiveSong]);

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleNextSong = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(false);
  };

  const handlePrevSong = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? songs.length - 1 : prevIndex - 1));
    setIsPlaying(false);
  };

  return (
    <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
      <Track isPlaying={isPlaying} activeSong={activeSong} />
      <div className="flex-1 flex flex-col items-center justify-center">
        <Controls
          isPlaying={isPlaying}
          handlePlayPause={handlePlayPause}
          handlePrevSong={handlePrevSong}
          handleNextSong={handleNextSong}
        />
        <Seekbar
          value={appTime}
          min="0"
          max={duration}
          onInput={(e) => setSeekTime(parseFloat(e.target.value))}
        />
       
      </div>
      <VolumeBar value={volume} onChange={(e) => setVolume(parseFloat(e.target.value))} />
    </div>
  );
};

export default MusicPlayer;
