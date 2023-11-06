import React from "react";
import Header from "../Header/Header";

export default function Resume() {
  return (
    <div>
      <Header />
      <section id="resume" className="resume">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="resume-wrapper">
                <div className="section-heading-middle">
                  {/* <div className="sub-heading d-flex align-items-center mx-auto">
                    <img src="img/orangeDot.png" alt="orange-dot" />
                    <p>My Resume</p>
                  </div> */}

                  <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                    1+ YEARS OF EXPERIENCE
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
                      // data-aos-delay={100}
                      // data-aos-duration={800}
                      className="resume-education bg-white"
                    >
                      <div className="row">
                        {/* education first column */}
                        <div className="col-lg-4 resume-first-item">
                          <h4 className="h4 text-black fw-500">
                            B-Tech in Electronics and Communication Engineering
                          </h4>
                          <p className="p secondary-black fw-400 line-height-7 mt-10">
                            (2018 - 2022)
                          </p>
                          {/* <p className="p secondary-black fw-400 line-height-7 mt-20">
                           Siliguri
                          </p> */}
                        </div>
                        {/* education second column */}
                        <div className="col-lg-4 resume-second-item">
                          <h4 className="h4 text-black fw-500">
                            Higher Secondary Education (Science)
                          </h4>
                          <p className="p secondary-black fw-400 line-height-7 mt-10">
                            (2016 - 2018)
                          </p>
                        </div>
                        {/* education third column */}
                        <div className="col-lg-4 resume-third-item">
                          <h4 className="h4 text-black fw-500">
                            Secondary School Education
                          </h4>
                          <p className="p secondary-black fw-400 line-height-7 mt-10">
                            (2006 - 2016)
                          </p>
                          {/* <p className="p secondary-black fw-400 line-height-7 mt-20">
                            Pomnis voluptas assumenda est, omnis dolor
                            repellendus.
                          </p> */}
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
                          <h4 className="h4 text-black fw-500">
                            Frontend Development
                          </h4>
                          <div className="row mt-10 justify-content-between">
                            <p className="col-10 p secondary-black fw-400 line-height-7 skill-name position-relative">
                              HTML
                            </p>
                            <p className="col-2 p secondary-black fw-400 line-height-7">
                              90%
                            </p>
                          </div>
                          <div className="row justify-content-between mt-10">
                            <p className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                              CSS
                            </p>
                            <p className="p col-2 secondary-black fw-400 line-height-7">
                              85%
                            </p>
                          </div>
                          <div className="row justify-content-between mt-10">
                            <p className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                              Bootstrap
                            </p>
                            <p className="p col-2 secondary-black fw-400 line-height-7">
                              85%
                            </p>
                          </div>
                        </div>
                        {/* skills second column */}
                        <div className="col-lg-4 resume-second-item">
                          <h4 className="h4 text-black fw-500">
                            Web Development
                          </h4>
                          <div className="row mt-10 justify-content-between">
                            <p className="col-10 p secondary-black fw-400 line-height-7 skill-name position-relative">
                              Reactjs
                            </p>
                            <p className="col-2 p secondary-black fw-400 line-height-7">
                              90%
                            </p>
                          </div>
                          <div className="row justify-content-between mt-10">
                            <p className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                              Javascript
                            </p>
                            <p className="p col-2 secondary-black fw-400 line-height-7">
                              70%
                            </p>
                          </div>
                          <div className="row justify-content-between mt-10">
                            <p className="col-10 p secondary-black fw-400 line-height-7 skill-name position-relative">
                              React Native
                            </p>
                            <p className="col-2 p secondary-black fw-400 line-height-7">
                              50%
                            </p>
                          </div>
                        </div>
                        {/* skills thirdt column */}
                        <div className="col-lg-4 resume-third-item">
                          <h4 className="h4 text-black fw-500">
                            Backend Development
                          </h4>
                          <div className="row mt-10 justify-content-between">
                            <p className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                              Nodejs
                            </p>
                            <p className="p col-2 secondary-black fw-400 line-height-7">
                              80%
                            </p>
                            <p className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                              Mysql
                            </p>
                            <p className="p col-2 secondary-black fw-400 line-height-7">
                              70%
                            </p>
                            <p className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                              Azure Cloud
                            </p>
                            <p className="p col-2 secondary-black fw-400 line-height-7">
                              80%
                            </p>
                          </div>
                          {/* <div className="row justify-content-between mt-10">
                            <p className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                              
                            </p>
                            <p className="p col-2 secondary-black fw-400 line-height-7">
                              87%
                            </p>
                          </div> */}
                          {/* <div className="row justify-content-between mt-10">
                            <p className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                              iBuildApp
                            </p>
                            <p className="p col-2 secondary-black fw-400 line-height-7">
                              82%
                            </p>
                          </div> */}
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
                            Full stack Developer Intern
                          </h4>
                          <p className="p secondary-black fw-400 line-height-7 mt-10">
                            ineuron.ai - (09/2022 - 12/2022)
                          </p>
                          <p className="p secondary-black fw-400 line-height-7 mt-20">
                            Developed the new UI of the shop site using
                            ReactJs.Developed the connection of admin to the
                            database. Developed a responsive OTP and Email
                            verification.Developed two user login systems like
                            buyers and sellers.
                          </p>
                        </div>
                        {/* experience second column */}
                        <div className="col-lg-4 resume-second-item">
                          <h4 className="h4 text-black fw-500">
                            Software Engineer Intern
                          </h4>
                          <p className="p secondary-black fw-400 line-height-7 mt-10">
                            Goflysmart Holidays - (03/2023 - 04/2023)
                          </p>
                          <p className="p secondary-black fw-400 line-height-7 mt-20">
                            Create a virtual network in Azure cloud service. API
                            management in the Azure cloud. Create Api in Nodejs.
                          </p>
                        </div>
                        {/* experience third column */}
                        <div className="col-lg-4 resume-third-item">
                          <h4 className="h4 text-black fw-500">
                            Software Engineer
                          </h4>
                          <p className="p secondary-black fw-400 line-height-7 mt-10">
                            Goflysmart Holidays - (04/2023 - Present)
                          </p>
                          <p className="p secondary-black fw-400 line-height-7 mt-20">
                            New flight series application integration in
                            React.js from scratch. created each and every
                            functionality for flight booking system. optimize
                            the application. System architecture in azure cloud
                            and deploy in it with configure database
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
