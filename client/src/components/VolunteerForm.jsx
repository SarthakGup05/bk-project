import React, { useState } from "react";

const VolunteerForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    city: "",
    qualification: "",
    state: "",
    nationality: "",
    isStudent: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Validation function
  const validateForm = () => {
    let formErrors = {};

    if (!formData.mobile) formErrors.mobile = "Mobile number is required";
    else if (!/^\d{10}$/.test(formData.mobile))
      formErrors.mobile = "Mobile number should be 10 digits";
    if (!formData.city) formErrors.city = "City is required";
    if (!formData.qualification)
      formErrors.qualification = "Qualification is required";
    if (!formData.state) formErrors.state = "State is required";
    if (!formData.nationality) formErrors.nationality = "Nationality is required";
    if (formData.isStudent === "")
      formErrors.isStudent = "Please select if you are a student";
    if (!formData.message) formErrors.message = "Message is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission logic here
      console.log("Form Submitted", formData);
      alert("Form submitted successfully!");
      // Reset form
      setFormData({
        name: "",
        mobile: "",
        city: "",
        qualification: "",
        state: "",
        nationality: "",
        isStudent: "",
        message: "",
      });
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">Volunteer Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>

        {/* Mobile number */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Mobile Number</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
          {errors.mobile && <span className="text-red-500 text-sm">{errors.mobile}</span>}
        </div>

        {/* City */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
          {errors.city && <span className="text-red-500 text-sm">{errors.city}</span>}
        </div>

        {/* Qualification */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Qualification</label>
          <input
            type="text"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
          {errors.qualification && <span className="text-red-500 text-sm">{errors.qualification}</span>}
        </div>

        {/* State */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
          {errors.state && <span className="text-red-500 text-sm">{errors.state}</span>}
        </div>

        {/* Nationality */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Nationality</label>
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
          {errors.nationality && <span className="text-red-500 text-sm">{errors.nationality}</span>}
        </div>

        {/* Are you a regular student of Brahma Kumaris? */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Are you a regular student of Brahma Kumaris?
          </label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="isStudent"
                value="Yes"
                checked={formData.isStudent === "Yes"}
                onChange={handleChange}
                className="form-radio text-red-600"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="isStudent"
                value="No"
                checked={formData.isStudent === "No"}
                onChange={handleChange}
                className="form-radio text-red-600"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
          {errors.isStudent && <span className="text-red-500 text-sm">{errors.isStudent}</span>}
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            rows="4"
          ></textarea>
          {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 bg-red-700 text-white font-semibold rounded-md hover:bg-red-600 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default VolunteerForm;
