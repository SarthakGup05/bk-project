import React, { useState } from "react";
import { Person, Phone, Email, LocationCity, Lock } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#FDFCFB] to-[#F7B777] p-6 z-10">
      <div className="max-w-5xl w-full bg-white rounded-lg shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Side: Form */}
        <div className="p-8 flex flex-col justify-center space-y-8">
          <div className="text-center">
            <img src="/assets/img/logo.png" alt="Logo" className="h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800">Create an Account</h2>
            <p className="text-gray-500">Join us today! It takes only a few steps.</p>
          </div>

          <form className="space-y-6">
            {/* Full Name */}
            <div className="relative">
              <Person className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#F7B777] focus:outline-none transition duration-300 ease-in-out"
                required
              />
            </div>

            {/* Mobile Number */}
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="number"
                placeholder="+91"
                maxLength={10}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#F7B777] focus:outline-none transition duration-300 ease-in-out"
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Email className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Email ID"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#F7B777] focus:outline-none transition duration-300 ease-in-out"
                required
              />
            </div>

            {/* City */}
            <div className="relative">
              <LocationCity className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="City"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#F7B777] focus:outline-none transition duration-300 ease-in-out"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#F7B777] focus:outline-none transition duration-300 ease-in-out"
                required
              />
              {/* <IconButton
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword ? "Hide" : "Show"}
              </IconButton> */}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#F7B777] text-white rounded-lg hover:bg-[#dda655] transition duration-300 ease-in-out shadow-lg"
            >
              Sign Up
            </button>
          </form>

          {/* Link to Sign In */}
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/sign-in" className="text-[#F7B777] hover:underline">
              Sign In
            </Link>
          </p>
        </div>

        {/* Right Side: YouTube Embed */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F7B777] to-[#f2a547] opacity-70"></div>
          <iframe
            className="w-full h-full relative z-10 rounded-none md:rounded-tr-lg md:rounded-br-lg"
            src="https://www.youtube.com/embed/example"
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
