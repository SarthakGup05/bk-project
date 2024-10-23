import React from 'react';
import { Link } from 'react-router-dom';

const OurActivites = () => {
  return (
    <div>
      <div className="others-activities-area pt-10 pb-24">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="text-center">
              <h3 className="section-title text-3xl font-bold center-style">
                Spiritual Activities
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Single Activities Start */}
            <div className="single-activities-wrap bg-white rounded-lg shadow-lg p-6">
              <Link to="/gallery/yoga" className="activities-imgaes">
                <img
                  src= '/assets/images/_yoga/8.png'
                  className="w-full h-auto"
                  alt="Yoga Pictures"
                />
              </Link>
              <div className="activities-content text-center mt-4">
                <Link to="/gallery/yoga">
                  <h4 className="activities-title text-xl font-semibold mt-2">Rajyoga & Meditation</h4>
                </Link>
                {/* <p className="text-gray-600 mt-2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p> */}
              </div>
            </div>
            {/*// Single Activities End */}

            {/* Single Activities Start */}
            <div className="single-activities-wrap bg-white rounded-lg shadow-lg p-6">
              <Link to="/gallery/winner" className="activities-imgaes">
                <img
                  src= '/assets/images/winners/1.png'
                  className="w-full h-auto"
                  alt="Winner Pictures"
                />
              </Link>
              <div className="activities-content text-center mt-4">
                <Link to="/gallery/winner">
                  <h4 className="activities-title text-xl font-semibold mt-2">AMAT Winners</h4>
                </Link>
                {/* <p className="text-gray-600 mt-2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p> */}
              </div>
            </div>
            {/*// Single Activities End */}

            {/* Single Activities Start */}
            <div className="single-activities-wrap bg-white rounded-lg shadow-lg p-6">
              <Link to="/gallery/ngo" className="activities-imgaes">
                <img
                  src= '/assets/images/_ngo/6.png'
                  className="w-full h-auto"
                  alt="NGO Pictures"
                />
              </Link>
              <div className="activities-content text-center mt-4">
                <Link to="/gallery/ngo">
                  <h4 className="activities-title text-xl font-semibold mt-2">Social activities</h4>
                </Link>
                {/* <p className="text-gray-600 mt-2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p> */}
              </div>
            </div>
            {/*// Single Activities End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurActivites;
