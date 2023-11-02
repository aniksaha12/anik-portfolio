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
                  <div className="sub-heading d-flex align-items-center">
                    <img src="img/orangeDot.png" alt="orange-dot" />
                    <p>I AM DESIGNER</p>
                  </div>
                  <div className="animate-heading">
                    <h1 className="black-color h1 home-one-title ah-headline">
                      Creative Design and Web{" "}
                      <span className="orange-color">
                        <span className="ah-words-wrapper">
                          <span className="is-visible"> Solutions</span>
                        </span>
                      </span>
                      <br />
                    </h1>
                  </div>
                  <p className="h5 line-height-7 mt-20 secondary-black fw-400">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas assumenda est, omnis dolor
                    repellendus. Temporibus autem quibusdam et.
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
                    src="img/bannerImg.png"
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
