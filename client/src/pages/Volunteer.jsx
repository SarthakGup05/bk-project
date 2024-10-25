import React from "react";
import VolunteerForm from "../components/VolunteerForm";

const Volunteer = () => {
  return (
    <>
      {" "}
      <div className="max-w-6xl mx-auto p-8">
        {/* Hero Section */}
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold text-red-700 mb-6">
            Become a Volunteer
          </h1>
          <p className="text-lg text-gray-700">
            Join us in making a difference in the world. By becoming a
            volunteer, you help support our mission to spread positivity, love
            for nature, and spiritual awakening.
          </p>
        </div>

        {/* Volunteer Opportunities Section */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ways to Volunteer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Opportunity 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-700 mb-2">
                Community Service
              </h3>
              <p className="text-gray-600">
                Help your local community through various service activities
                such as organizing events, cleaning drives, and assisting with
                our outreach programs.
              </p>
            </div>

            {/* Opportunity 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-700 mb-2">
                Environmental Initiatives
              </h3>
              <p className="text-gray-600">
                Contribute to our efforts to protect the environment by
                participating in tree-planting events, recycling drives, and
                eco-friendly initiatives.
              </p>
            </div>

            {/* Opportunity 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-700 mb-2">
                Spiritual Guidance
              </h3>
              <p className="text-gray-600">
                Assist in organizing spiritual workshops and classes, or provide
                guidance to those seeking spiritual awakening and personal
                growth.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="py-12 bg-gray-100 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Fill out the form below to sign up as a volunteer and join us in
            spreading positivity.
          </p>
          {/* <a
        href="/contact"
        className="px-8 py-4 bg-red-700 text-white rounded-full hover:bg-red-600 transition-colors"
      >
        Become a Volunteer
      </a> */}
        </div>
      </div>
      <VolunteerForm/>
    </>
  );
};

export default Volunteer;
