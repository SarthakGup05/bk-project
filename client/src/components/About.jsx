import React from "react";

const About = () => {
  return (
    <>
      {/* ======== Tai About Area Start ========== */}
      <div className="tai-about-area py-20 px-6">
        <div className="container-fluid px-0">
          <div className="flex flex-wrap items-center">
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <div className="about-tai-image" style={{ aspectRatio: '4 / 3' }}>
                <img
                  src="/assets/images/bg/Untitled (1920 x 850 px) (850 x 600 px) (850 x 600 px).png"
                  className="w-full h-full object-cover"
                  alt="Tai Images"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <div className="about-tai-content px-8 tablet-mt__30 small-mt__30">
                <div className="section-title-wrap">
                  <h3 className="section-title left-style text-3xl font-bold">
                    Angel of Shiva
                  </h3>
                </div>
                <p className="mt-4 text-gray-600 font-semibold">
                  Angel Shiva is a spiritual movement rooted in the teachings of
                  the Brahma Kumaris. Through the study of the Avyakt Murli, a
                  divine text believed to be the teachings of the Supreme Soul,
                  followers seek spiritual enlightenment. Rajyoga meditation
                  and the Avyakt Murli Mahavakya are key practices to connect
                  with the divine and cultivate spiritual qualities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ======== Tai About Area End ========== */}
    </>
  );
};

export default About;
