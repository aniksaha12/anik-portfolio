import React from "react";
import Header from "../Header/Header";

export default function Resume() {
  return (
    <div>
    <Header/>
      <section id="resume" className="resume">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="resume-wrapper">
                <div className="section-heading-middle">
                  <div className="sub-heading d-flex align-items-center mx-auto">
                    <img src="img/orangeDot.png" alt="orange-dot" />
                    <p>My Resume</p>
                  </div>
                  <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                    10+ YEARS OF EXPERIENCE
                  </h2>
                </div>
                <div className="row mt-50 row-mobile-margin">
                  <div className="col-12 col-lg-2">
                    <div className="resume-topics h-100 flex-column justify-content-center position-relative">
                      <h3 className="h3 line-height-3 resume-topic-item resume-topic-one fw-500 text-black position-absolute">
                        Education
                      </h3>
                      <h3 className="h3 line-height-3 resume-topic-item resume-topic-two fw-500 text-black position-absolute">
                        Software Skills
                      </h3>
                      <h3 className="h3 line-height-3 resume-topic-item resume-topic-three fw-500 text-black position-absolute">
                        Experience
                      </h3>
                    </div>
                  </div>
                  <div className="col-12 col-lg-10">
                    {/* resume education row */}
                    <div
                    //   data-aos="fade-up"
                      data-aos-delay={100}
                      data-aos-duration={800}
                      className="resume-education bg-white"
                    >
                      <div className="row">
                        {/* education first column */}
                        <div className="col-lg-4 resume-first-item">
                          <h4 className="h4 text-black fw-500">
                            BSc in Computer Science
                          </h4>
                          <p className="p secondary-black fw-400 line-height-7 mt-10">
                            University of ULAV (2018 - 2022)
                          </p>
                          <p className="p secondary-black fw-400 line-height-7 mt-20">
                            Pomnis voluptas assumenda est, omnis dolor
                            repellendus.
                          </p>
                        </div>
                        {/* education second column */}
                        <div className="col-lg-4 resume-second-item">
                          <h4 className="h4 text-black fw-500">
                            AS - Science &amp; Information
                          </h4>
                          <p className="p secondary-black fw-400 line-height-7 mt-10">
                            University of ULAV (2016 - 2018)
                          </p>
                          <p className="p secondary-black fw-400 line-height-7 mt-20">
                            Pomnis voluptas assumenda est, omnis dolor
                            repellendus.
                          </p>
                        </div>
                        {/* education third column */}
                        <div className="col-lg-4 resume-third-item">
                          <h4 className="h4 text-black fw-500">
                            Secondary School Education
                          </h4>
                          <p className="p secondary-black fw-400 line-height-7 mt-10">
                            Kindergarten (2006 - 2016)
                          </p>
                          <p className="p secondary-black fw-400 line-height-7 mt-20">
                            Pomnis voluptas assumenda est, omnis dolor
                            repellendus.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* resume skills row */}
                    <div
                    //   data-aos="fade-up"
                    //   data-aos-delay={200}
                    //   data-aos-duration={800}
                      className="resume-skills bg-white mt-4"
                    >
                      <div className="row">
                        {/* skills first column */}
                        <div className="col-lg-4 resume-first-item">
                          <h4 className="h4 text-black fw-500">UI/UX Design</h4>
                          <div className="row mt-10 justify-content-between">
                            <p className="col-10 p secondary-black fw-400 line-height-7 skill-name position-relative">
                              Figma
                            </p>
                            <p className="col-2 p secondary-black fw-400 line-height-7">
                              90%
                            </p>
                          </div>
                          <div className="row justify-content-between mt-10">
                            <p className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                              Adobe XD
                            </p>
                            <p className="p col-2 secondary-black fw-400 line-height-7">
                              85%
                            </p>
                          </div>
                          <div className="row justify-content-between mt-10">
                            <p className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                              Photoshop
                            </p>
                            <p className="p col-2 secondary-black fw-400 line-height-7">
                              80%
                            </p>
                          </div>
                        </div>
                        {/* skills second column */}
                        <div className="col-lg-4 resume-second-item">
                          <h4 className="h4 text-black fw-500">
                            Web Developer
                          </h4>
                          <div className="row mt-10 justify-content-between">
                            <p className="col-10 p secondary-black fw-400 line-height-7 skill-name position-relative">
                              WordPress
                            </p>
                            <p className="col-2 p secondary-black fw-400 line-height-7">
                              90%
                            </p>
                          </div>
                          <div className="row justify-content-between mt-10">
                            <p className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                              Mockplus
                            </p>
                            <p className="p col-2 secondary-black fw-400 line-height-7">
                              85%
                            </p>
                          </div>
                          <div className="row justify-content-between mt-10">
                            <p className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                              Weebly
                            </p>
                            <p className="p col-2 secondary-black fw-400 line-height-7">
                              80%
                            </p>
                          </div>
                        </div>
                        {/* skills thirdt column */}
                        <div className="col-lg-4 resume-third-item">
                          <h4 className="h4 text-black fw-500">
                            App Development
                          </h4>
                          <div className="row mt-10 justify-content-between">
                            <p className="col-10 p secondary-black fw-400 line-height-7 skill-name position-relative">
                              Quixy
                            </p>
                            <p className="col-2 p secondary-black fw-400 line-height-7">
                              92%
                            </p>
                          </div>
                          <div className="row justify-content-between mt-10">
                            <p className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                              AppyPie
                            </p>
                            <p className="p col-2 secondary-black fw-400 line-height-7">
                              87%
                            </p>
                          </div>
                          <div className="row justify-content-between mt-10">
                            <p className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                              iBuildApp
                            </p>
                            <p className="p col-2 secondary-black fw-400 line-height-7">
                              82%
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* resume experience row */}
                    <div
                    //   data-aos="fade-up"
                    //   data-aos-delay={300}
                    //   data-aos-duration={800}
                      className="resume-education mt-4 bg-white"
                    >
                      <div className="row">
                        {/* experience first column */}
                        <div className="col-lg-4 resume-first-item">
                          <h4 className="h4 text-black fw-500">
                            Web Developer &amp; Trainer
                          </h4>
                          <p className="p secondary-black fw-400 line-height-7 mt-10">
                            Brac Developer Team - (2012 - 2016)
                          </p>
                          <p className="p secondary-black fw-400 line-height-7 mt-20">
                            Pomnis voluptas assumenda est, omnis dolor
                            repellendus.
                          </p>
                        </div>
                        {/* experience second column */}
                        <div className="col-lg-4 resume-second-item">
                          <h4 className="h4 text-black fw-500">
                            Front-end Developer
                          </h4>
                          <p className="p secondary-black fw-400 line-height-7 mt-10">
                            Brane - (2020 - 2011)
                          </p>
                          <p className="p secondary-black fw-400 line-height-7 mt-20">
                            Pomnis voluptas assumenda est, omnis dolor
                            repellendus.
                          </p>
                        </div>
                        {/* experience third column */}
                        <div className="col-lg-4 resume-third-item">
                          <h4 className="h4 text-black fw-500">
                            UI/UX Designer
                          </h4>
                          <p className="p secondary-black fw-400 line-height-7 mt-10">
                            Google Out Tech - (2017 - Present)
                          </p>
                          <p className="p secondary-black fw-400 line-height-7 mt-20">
                            Pomnis voluptas assumenda est, omnis dolor
                            repellendus.
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
