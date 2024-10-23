import React from "react";
import { FaTelegram, FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-white to-[#F7B777] text-gray-700 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Column 1: Logo */}
          <div className="flex justify-center sm:justify-start">
            <Link to="/">
              <img
                src="/assets/img/f.png"
                alt="Logo"
                className="h-24 w-36 sm:h-32 sm:w-48 object-contain"
              />
            </Link>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">
              Quick Links
            </h3>
            <ul>
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/mission-vision"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Media */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Media</h3>
            <ul>
              <li>
                <Link
                  to="/audio"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Audio
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media: Only YouTube */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">
              Follow Us
            </h3>
            <div className="flex items-center  gap-[10px]">
              <a href="http://tiny.cc/aoshindiwapp">
                <IoLogoWhatsapp className="text-green-800 text-xl lg:text-2xl" />
              </a>
              <a href="https://t.me/angelofshivahindi">
                <FaTelegram className="text-blue-600 text-xl lg:text-2xl" />
              </a>
              <a href="https://www.youtube.com/@AngelofShiva">
                <FaYoutube className="text-red-800 text-xl lg:text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom: Copyright */}
        <div className="mt-6 border-t border-gray-300 pt-4 text-center">
          <p className="text-sm text-gray-700">
            Copyright © 2024 Brahma Kumaris | Powered by Team AOS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
