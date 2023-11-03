import React from "react";
import Testimonial from "../Testimonial/Testimonial";
import Skills from "../Skills/Skills";

export default function About() {
  return (
    <div>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row align-items-center">
                {/* <div className="about-image-col col-12 col-lg-6 text-center">
                  <div className="img-overlay mx-auto mx-lg-0">
                    <img
                      className="img-fluid"
                      src="img/aniksaha1.png"
                      alt="about image"
                    />
                  </div>
                </div> */}
                <div className="about-text-col col-12 col-lg-6">
                  <div className="about-text-top">
                    <div className="section-heading">
                      <div className="sub-heading d-flex align-items-center">
                        <h2>About Me</h2>
                      </div>
                    </div>
                    <p className="secondary-black line-height-7 mt-20">
                      I am Anik, a 23 years old Software Engineer with 1+ years
                      of experience. Currently, I am working at Goflysmart
                      Holidays as a Software Engineer. My expertise is in
                      Frontend Web Development also backend. Currently, I am
                      learning React Native.
                    </p>
                  </div>
                  <div className="row row-mobile-margin gy-3 gy-sm-0 mt-50">
                    {/* <div className="col-12 col-sm-6 col-lg-6 d-flex align-items-center">
                      <div className="mr-10">
                        <img src="img/aboutIconOne.png" alt="about icon one" />
                      </div>
                      <div className="about-complete-project">
                        <h4 className="fw-700 orange-color h4">
                          <span className="counter">15</span>+
                        </h4>
                        <h4 className="fw-500 black-color h4">
                          Complete Project
                        </h4>
                      </div>
                    </div> */}
                    <div className="col-12 col-sm-6 col-lg-6 d-flex align-items-center">
                      <div className="mr-10">
                        <img src="img/aboutIconTwo.png" alt="about icon two" />
                      </div>
                      <div className="about-years-experience">
                        <h4 className="fw-700 orange-color h4">
                          <span className="counter">1</span>+
                        </h4>
                        <h4 className="fw-500 black-color h4">
                          Year of experience
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay={0}
                    data-aos-duration={1500}
                    className="row flex-column row-mobile-margin mt-50"
                  >
                    <div className="col-12 mb-0 mb-20 ">
                      <div className="row">
                        <div className="col-12 col-sm-6 col-lg-6">
                          <div className="mb-20 d-flex align-items-center">
                            <i className="fa-regular fa-square-check mr-10 h6 orange-color" />
                            <p>Work simple and cline design</p>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-6">
                          <div className="mb-20 d-flex align-items-center">
                            <i className="fa-regular fa-square-check mr-10 h6 orange-color" />
                            <p>Web Design Full stack</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="row">
                        <div className="col-12 col-sm-6 col-lg-6">
                          <div className="d-flex align-items-center mb-20">
                            <i className="fa-regular fa-square-check mr-10 h6 orange-color" />
                            <p>New idea and user friendly design</p>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-6">
                          <div className="d-flex align-items-center">
                            <i className="fa-regular fa-square-check mr-10 h6 orange-color" />
                            <p>Unlimited Revisions</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    // data-aos="fade-up"
                    // data-aos-delay={100}
                    // data-aos-duration={1500}
                    className="btn btn_effect home-banner-btn orange-btn mt-50"
                    href="resume.html"
                  >
                    <span className="position-relative z-1">
                      Download My CV
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Skills />
      <Testimonial />
    </div>
  );
}
