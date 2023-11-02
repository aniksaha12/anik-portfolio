import React from "react";

export default function Testimonial() {
  return (
    <div>
      <section id="testimonial" className="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="testimonial-wrapper">
                <div className="section-heading-middle">
                  <div className="sub-heading d-flex align-items-center mx-auto">
                    <img src="img/orangeDot.png" alt="orange-dot" />
                    <p>Testimonial</p>
                  </div>
                  <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                    Client Feedback
                  </h2>
                </div>
                <div className="testimonial-list-container row-mobile-margin mt-50">
                  <div className="owl-carousel owl-theme">
                    <div className="item">
                      <div className="testimonial-card">
                        <div className="bio d-flex align-items-center">
                          <img
                            className="bio-img"
                            src="img/testimonialOne.png"
                            alt="testimonial-image"
                          />
                          <div>
                            <h3 className="h3 fw-500 line-height-3 black-color">
                              John K. Meraz
                            </h3>
                            <p className="p fw-400 line-height-7 secondary-black">
                              CTO, Xyz Group
                            </p>
                          </div>
                        </div>
                        <p className="p line-height-7 fw-400 secondary-black mt-20">
                          “Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature fr45 BC, mak it over 2000 years old.
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial-card">
                        <div className="bio d-flex align-items-center">
                          <img
                            className="bio-img"
                            src="img/testimonialTwo.png"
                            alt="testimonial-image"
                          />
                          <div>
                            <h3 className="h3 fw-500 line-height-3 black-color">
                              Johan Smith
                            </h3>
                            <p className="p fw-400 line-height-7 secondary-black">
                              CEO, Abc Agency
                            </p>
                          </div>
                        </div>
                        <p className="p line-height-7 fw-400 secondary-black mt-20">
                          “Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature fr45 BC, mak it over 2000 years old.
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial-card">
                        <div className="bio d-flex align-items-center">
                          <img
                            className="bio-img"
                            src="img/testimonialThree.png"
                            alt="testimonial-image"
                          />
                          <div>
                            <h3 className="h3 fw-500 line-height-3 black-color">
                              Robert E. Wolf{" "}
                            </h3>
                            <p className="p fw-400 line-height-7 secondary-black">
                              Director, Techso
                            </p>
                          </div>
                        </div>
                        <p className="p line-height-7 fw-400 secondary-black mt-20">
                          “Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature fr45 BC, mak it over 2000 years old.
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial-card">
                        <div className="bio d-flex align-items-center">
                          <img
                            className="bio-img"
                            src="img/testimonialThree.png"
                            alt="testimonial-image"
                          />
                          <div>
                            <h3 className="h3 fw-500 line-height-3 black-color">
                              Robert E. Wolf{" "}
                            </h3>
                            <p className="p fw-400 line-height-7 secondary-black">
                              Director, Techso
                            </p>
                          </div>
                        </div>
                        <p className="p line-height-7 fw-400 secondary-black mt-20">
                          “Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature fr45 BC, mak it over 2000 years old.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
