/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from 'react';

const Player = ({ audioSrc, repeat }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.play();
  }, []);

  return (
    <audio
      src={audioSrc}
      ref={ref}
      loop={repeat}
      controls // Add controls for play, pause, etc.
    />
  );
};

export default Player;
