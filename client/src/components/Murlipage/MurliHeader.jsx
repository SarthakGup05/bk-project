import React from 'react';
import { FaAngleLeft, FaDownload, FaPrint, FaHeadphones, FaPlay, FaSearch, FaExpand } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="flex flex-wrap items-center justify-between bg-gray-100 p-4 shadow-md">
      {/* Logo and Title */}
      <div className="flex items-center space-x-3">
        <img src="\assets\images\logo\logo1.png" alt="Logo" className="h-8" />
      </div>

      {/* Main Controls */}
      <div className="flex flex-wrap items-center justify-center space-x-2 mt-2 md:mt-0">
        {/* Previous Button */}
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <FaAngleLeft />
        </button>

        {/* Date Selector */}
        <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 font-semibold">
          5<sup>th</sup>
        </button>

        {/* Other Control Buttons */}
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <FaDownload />
        </button>
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <FaPrint />
        </button>
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <FaHeadphones />
        </button>

        {/* Audio Player */}
        <div className="flex items-center bg-gray-300 rounded-full px-4 py-1 space-x-2 mt-2 md:mt-0">
          <FaPlay />
          <div className="w-24 h-2 bg-gray-400 rounded-full overflow-hidden">
            <div className="h-full bg-gray-600" style={{ width: '50%' }}></div>
          </div>
          <span className="text-xs text-gray-600">00:00 / 23:33</span>
        </div>

        {/* Zoom and Fullscreen Controls */}
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <FaSearch />
        </button>
        {/* <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <FaExpand />
        </button> */}
      </div>

      {/* Language Selector and Menu */}
      <div className="flex items-center space-x-4 mt-2 md:mt-0">
        <label className="text-sm">Language:</label>
        <select className="border rounded px-2 py-1">
          <option>हिंदी (Hindi)</option>
          <option>English</option>
        </select>

        {/* Menu Icon */}
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <span className="text-lg font-semibold">☰</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
