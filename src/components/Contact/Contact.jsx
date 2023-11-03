import React from "react";

export default function Contact() {
  return (
    <div>
      <section id="contact" className="home-contact">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="home-contact-wrapper">
                <div className="section-heading-middle">
                  <div className="sub-heading d-flex align-items-center mx-auto">
                  <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                  Contact Me
                  </h2>
                  </div>
                  
                </div>
                <div className="home-contact-info-container row row-mobile-margin mt-50 align-items-start">
                  <div className="col-12 col-md-8">
                    <form>
                      <div className="row g-4">
                        <div className="col-12 col-sm-6">
                          <input
                            type="text"
                            className="form-control home-contact-input"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="col-12 col-sm-6">
                          <input
                            type="email"
                            className="form-control home-contact-input"
                            placeholder="Your Email"
                          />
                        </div>
                        <div className="col-12 col-sm-6">
                          <input
                            type="tel"
                            className="form-control home-contact-input"
                            placeholder="Your phone"
                          />
                        </div>
                        <div className="col-12 col-sm-6">
                          <input
                            type="text"
                            className="form-control home-contact-input"
                            placeholder="Subject"
                          />
                        </div>
                        <div className="col-12">
                          <textarea
                            placeholder="Message"
                            className="form-control home-contact-input"
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-12">
                          <div className="col-12">
                            <button
                              type="submit"
                              className="btn orange-btn btn_effect row-mobile-margin mt-30"
                            >
                              <span className="z-1 position-relative">
                                Send Me Message
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-12 col-md-4 home-contact-icon-container">
                    <div className="row row-mobile-margin gy-3 gy-sm-0">
                      <div className="col-12 d-flex align-items-center">
                        <div className="mr-10">
                          <div className="light-orange-bg-icon">
                            <i className="fa-solid fa-location-dot orange-color" />
                          </div>
                        </div>
                        <div className="about-complete-project">
                          <h4 className="fw-500 black-color h4">Address</h4>
                          <p className="fw-400 secondary-black">
                            <a href="geo:377749">
                              202 Dog Hill Lane Beloit, KS 67420
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="col-12 d-flex align-items-center row-mobile-margin mt-50">
                        <div className="mr-10">
                          <div className="light-orange-bg-icon">
                            <i className="fa-solid fa-phone-volume orange-color" />
                          </div>
                        </div>
                        <div className="about-years-experience">
                          <h4 className="fw-500 black-color h4">Phone</h4>
                          <p className="fw-400 secondary-black">
                            <a href="tel:01589634755">+01589634755</a>
                          </p>
                        </div>
                      </div>
                      <div className="col-12 d-flex align-items-center row-mobile-margin mt-50">
                        <div className="mr-10">
                          <div className="light-orange-bg-icon">
                            <i className="fa-solid fa-envelope orange-color" />
                          </div>
                        </div>
                        <div className="about-years-experience">
                          <h4 className="fw-500 black-color h4">Email</h4>
                          <p className="fw-400 secondary-black">
                            <a href="mailto:credesign@gmail.com">
                              credesign@gmail.com
                            </a>
                          </p>
                        </div>
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
