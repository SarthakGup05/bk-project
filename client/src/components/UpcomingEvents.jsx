import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const servicesData = [
  {
    id: 1,
    title: "spiritual essence",
    imgSrc: "assets/images/activities/2.png",
    alt: "spiritual essence",
    link: "/bhatti",
    buttonLabel: "Read More",
  },
  {
    id: 2,
    title: "rajyoga commentry",
    imgSrc: "/assets/images/activities/1.jpg",
    alt: "rajyoga commentry",
    link: "/rajyog-commentry",
    buttonLabel: "Read More",
  },
  {
    id: 3,
    title: "avyakt murli",
    imgSrc: "/assets/images/activities/3 copy 2.png",
    alt: "avyakt murli",
    link: "#",
    buttonLabel: "Read More",
  },
];

const UpcomingEvents = () => {
  return (
    <>
      <div className="service-area my-[50px]">
        <div className="container mx-auto px-[100px]">
          <div className="flex justify-center">
            <div className="text-center">
              <h3 className="section-title center-style text-3xl font-bold">
                Our Upcoming Events
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
                <div className="service-content py-4 flex flex-col items-center gap-2">
                  <h4 className="service-title-two text-xl capitalize font-semibold ">
                    {service.title}
                  </h4>
                  <button className="inline-block bg-[#F7B777] text-white text-sm px-3 py-1 rounded-full  hover:bg-[#DFAE4B] transition duration-200">
                    {service.buttonLabel}
                  </button>
                </div>
                {/* Single Service End */}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* ======== Upcoming Event Area End ========== */}
    </>
  );
};

export default UpcomingEvents;
