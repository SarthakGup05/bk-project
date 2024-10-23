import React from 'react'

const Video = () => {
  return (
    <div><div className="hindu-video-area">
    <div className="container-fluid container-fluid--cp-100">
      <div className="hindu-video-bg hindu-video-section-pb bg-overlay-black border-radius-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="video-content-wrap text-center position-relative">
              <div className="icon">
                <a
                  href="https://www.youtube.com/watch?v=d7jAiAYusUg"
                  className="video-link popup-youtube"
                >
                  <img
                    src="assets/images/icons/play-circle.png"
                    alt="Video Icon"
                  />
                </a>
              </div>
              <div className="content section-space--mt_80">
                <h3 className="text-white mb-10">
                  Best speech on religious life
                </h3>
                <p className="text-white">
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms of
                  pleasure of the moment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Video