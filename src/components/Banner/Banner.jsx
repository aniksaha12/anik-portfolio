import React from "react";

export default function Banner() {
  return (
    <div>
      <section className="home-banner position-relative">
        <div className="container-fluid custom-container">
          <div className="row">
            <div className="col-12">
              <div className="home-banner-wrapper row align-items-center">
                <div className="col-12 col-lg-6 col-xl-7 home-banner-text-col position-relative">
                  <div className="animate-heading">
                    <h1 className="black-color h1 home-one-title ah-headline">
                      Hi, Welcome to{" "}
                      <span className="orange-color">
                        <span className="ah-words-wrapper">
                          <span className="is-visible">My space</span>
                        </span>
                      </span>
                      <br />
                    </h1>
                  </div>
                  <p className="h5 line-height-7 mt-20 secondary-black fw-400">
                    I am Anik, a 23 years old Software Engineer with 1+ years of
                    experience. Currently, I am working at Goflysmart Holidays
                    as a Software Engineer. My expertise is in Frontend Web
                    Development also backend. Currently, I am learning React
                    Native.
                  </p>
                  <a
                    className="btn_effect btn home-banner-btn orange-btn mt-50"
                    href="resume.html"
                  >
                    <span className="z-1 position-relative">
                      Download My CV
                    </span>
                  </a>
                  <div className="banner-particle-one-container">
                    <img
                      className="position-absolute banner-particle-one d-none d-lg-inline"
                      src="img/particleOne.png"
                      alt="banner particle one"
                    />
                  </div>
                  <div className="banner-particle-two-container">
                    <img
                      className="position-absolute banner-particle-two delay-one"
                      src="img/particleTwo.png"
                      alt="banner particle two"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-5 text-center position-relative home-banner-img-col">
                  <div className="banner-particle-one-container">
                    <img
                      className="position-absolute banner-particle-one d-lg-none"
                      src="img/particleOne.png"
                      alt="banner particle one"
                    />
                  </div>
                  <img
                    className="position-absolute home-banner-shape bg-move-3d"
                    src="img/homeNannerShape.png"
                    alt="banner-shape"
                  />
                  <img
                    className="img-fluid position-relative z-index-10 home-banner-img"
                    src="img/aniksaha1.png"
                    alt="banner-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
