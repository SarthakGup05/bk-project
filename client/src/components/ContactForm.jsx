import React, { useState } from "react";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cityState: "",
    phone: "",
    queryType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.cityState) newErrors.cityState = "City & State are required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.message) newErrors.message = "Message is required.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        cityState: "",
        phone: "",
        queryType: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-red-700 mb-8">
        Reach <span className="text-gray-800">out to Us</span>
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        {/* Name */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`border-b-2 p-2 focus:outline-none ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`border-b-2 p-2 focus:outline-none ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* City & State */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700">
            City & State
          </label>
          <input
            type="text"
            name="cityState"
            value={formData.cityState}
            onChange={handleInputChange}
            className={`border-b-2 p-2 focus:outline-none ${
              errors.cityState ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.cityState && (
            <p className="text-red-500 text-sm mt-1">{errors.cityState}</p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`border-b-2 p-2 focus:outline-none ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Queries */}
        <div className="flex flex-col sm:col-span-2">
          <label className="text-sm font-semibold text-gray-700">Queries</label>
          <select
            name="queryType"
            value={formData.queryType}
            onChange={handleInputChange}
            className="border-b-2 p-2 focus:outline-none border-gray-300"
          >
            <option value="" disabled>
              Select a query type
            </option>
            <option value="general">General Inquiry</option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col sm:col-span-2">
          <label className="text-sm font-semibold text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className={`border-b-2 p-2 focus:outline-none ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
            rows="4"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end sm:col-span-2">
          <button
            type="submit"
            className="bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition-colors"
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
