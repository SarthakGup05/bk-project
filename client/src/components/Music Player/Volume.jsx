import React from 'react';
import { BsFillVolumeUpFill, BsVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs';

const VolumeBar = ({ value, onChange }) => (
  <div className="hidden lg:flex flex-1 items-center justify-end">
    {value > 0.5 ? (
      <BsFillVolumeUpFill size={25} color="#FFF" />
    ) : value > 0 ? (
      <BsVolumeDownFill size={25} color="#FFF" />
    ) : (
      <BsFillVolumeMuteFill size={25} color="#FFF" />
    )}
    <input
      type="range"
      value={value}
      min="0"
      max="1"
      step="0.01"
      onChange={onChange}  // Add onChange prop to handle volume adjustment
      className="2xl:w-40 lg:w-32 md:w-32 h-1 ml-2"
    />
  </div>
);

export default VolumeBar;
