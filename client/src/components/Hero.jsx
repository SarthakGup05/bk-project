import React from "react";
import Slider from "react-slick"; // Import the Slider component
import "slick-carousel/slick/slick.css"; // Import Slick styles
import "slick-carousel/slick/slick-theme.css"; // Import Slick theme styles
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Hero = () => {
  // Slider settings
  const settings = {
    dots: true, // Enable pagination dots
    infinite: true, // Infinite sliding
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
  };

  // Dynamic slide data
  const slides = [
    {
      src: "/assets/images/banners/banner1.jpg",
      title: "Buddham namami, dhammam namami sangham namami.",
      buttonText: "Explore more",
    },
    {
      src: "/assets/images/banners/Bnr English.jpg",
      title: "Discover the teachings of Buddha.",
      buttonText: "Learn More",
    },
    // Uncomment for additional slide
    // {
    //   src: "https://picsum.photos/800/400?image=30",
    //   title: "Join us in our journey towards enlightenment.",
    //   buttonText: "Get Started",
    // },
  ];

  return (
    <>
      {/* ======== Hero Area Start ========== */}
      <div className=" overflow-hidden py-0">
        {/* <div className="container mx-auto">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="flex justify-end relative">
                <img
                  src={slide.src}
                  alt={slide.title} // Use the title as alt text
                  className="w-full h-auto object-cover" // Ensures the image maintains its aspect ratio and does not crop
                />
              </div>
            ))}
          </Slider>
        </div> */}
        <div className="container-fluid p-0 mt-20 sm:18">
          <Swiper
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            speed={2000}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            spaceBetween={0}
            // centeredSlides={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              1200: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
            }}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {slides.map((slide, index) => (
              <SwiperSlide>
                <div key={index} className="flex justify-end relative">
                  <img
                    src={slide.src}
                    alt={slide.title} // Use the title as alt text
                    className="w-full h-auto object-cover" // Ensures the image maintains its aspect ratio and does not crop
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* ======== Hero Area End ========== */}
    </>
  );
};

export default Hero;
