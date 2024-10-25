import React from "react";
import { FaYoutube, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import ContactForm from "../components/ContactForm";

const ContactUs = () => {
  return (
    <>
        <div className="flex flex-col lg:flex-row justify-between px-8 py-12 gap-8 mt-24">
      {/* Left-side contact information */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-1/2">
        <ul className="space-y-4 text-gray-800">
          <li className="flex items-center">
            <span className="text-2xl text-red-700 mr-3">
              <i className="fas fa-map-marker-alt" />
            </span>
            <div>
              Shantivan Complex, Post box No-1 Abu Road (Raj.) 307510
            </div>
          </li>
          <li className="flex items-center">
            <span className="text-2xl text-red-700 mr-3">
              <i className="fas fa-user" />
            </span>
            <div>
              <strong>Brother BK Karuna</strong> <br />
              Director of PR & Communication
            </div>
          </li>
          <li className="flex items-center">
            <span className="text-2xl text-red-700 mr-3">
              <i className="fas fa-envelope" />
            </span>
            <div>
              <strong>Email Address</strong> <br />
              contact@brahmakumaris.com
            </div>
          </li>
        </ul>
      </div>

      {/* Right-side social media links */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-1/2 flex justify-center items-center">
        <div className="flex space-x-6 text-4xl text-gray-800">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600"
          >
            <FaYoutube />
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://wa.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
    <ContactForm/>
    </>

  );
};

export default ContactUs;
