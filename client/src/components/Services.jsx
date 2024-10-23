import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const servicesData = [
  {
    id: 1,
    title: "Bhatti",
    imgSrc: "/assets/images/services/2.png",
    alt: "Bhatti Service",
    link: "/bhatti",
    buttonLabel: "Watch Now",
  },
  {
    id: 2,
    title: "Avyakt Murli",
    imgSrc: "/assets/images/services/1.png",
    alt: "Avyakt Murli Service",
    link: "/Avyakt-murli",
    buttonLabel: "Read More",
  },
  {
    id: 3,
    title: "Online Exam",
    imgSrc: "/assets/images/services/3.png",
    alt: "Online Exam Service",
    link: "/sign-in",
    buttonLabel: "Get Started",
  },
];

const Services = () => {
  return (
    <div>
      {/* ======== Service Area Start ========== */}
      <div className="service-area py-10">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="text-center">
              <h3 className="section-title center-style text-3xl font-bold">
                Our Spiritual Classes
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-2">
            {servicesData.map((service) => (
              <Link
                to={service.link}
                key={service.id}
                className="single-service-wrap mt-8 bg-white rounded-lg shadow-md"
              >
                {/* Single Service Start */}
                <div className="service-image relative">
                  <img
                    src={service.imgSrc}
                    className="img-fluid h-full w-full object-cover"
                    alt={service.alt}
                  />
                </div>
                <div className="service-content p-6">
                  <h4 className="service-title-two text-xl font-semibold mb-2">
                    {service.title}
                  </h4>
                  <button className="inline-block bg-[#F7B777] text-white text-sm px-3 py-1 rounded-full mr-3 mb-3 hover:bg-[#DFAE4B] transition duration-200">
                    {service.buttonLabel}
                  </button>
                </div>
                {/* Single Service End */}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* ======== Service Area End ========== */}
    </div>
  );
};

export default Services;
