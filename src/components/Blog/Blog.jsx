import React from "react";
import Header from "../Header/Header";

export default function Blog() {
  return (
    <div>
      <section id="blog" className="blogs">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="blogs-wrapper">
                <div className="section-heading-middle">
                  <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                    LATEST BLOG
                  </h2>
                </div>
                <div className="blogs-container row-mobile-margin mt-50">
                  <div
                    className="modal fade"
                    id="blogModalOne"
                    tabIndex={-1}
                    aria-hidden="true"
                  ></div>
                  <div className="card p-0 blog-card">
                    <div className="img-overlay">
                      <img
                        src="img/Javascript-DOM.jpg"
                        className="card-img-top img-fluid blog-card-img"
                        alt="blog image"
                      />
                    </div>
                    <div className="card-body blog-card-body">
                      <p className="p font-urbanist line-height-7 blog-card-date fw-400 mb-20">
                        29 July, 2022
                      </p>
                      <a>
                        <span className="card-title h5 fw-600 line-height-3 black-color">
                          The Document Object Model (DOM) is the data
                          representation of the objects that comprise the
                          structure and content of a document on the web.
                        </span>
                      </a>
                      <a>
                        <div className="blog-card-btn d-flex align-items-center mt-4">
                          <a
                            href="https://dev.to/aniksaha12/javascript-dom-399j"
                            target="_blank"
                          >
                            <span className="blog-card-btn-text mr-10 .font-urbanist fw-600 line-height-7 orange-color">
                              Read More
                            </span>
                          </a>
                          <i className="fa-solid fa-arrow-right" />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="card p-0 blog-card">
                    <div className="img-overlay">
                      <img
                        src="img/datatype.png"
                        className="card-img-top img-fluid blog-card-img"
                        alt="blog image"
                      />
                    </div>
                    <div className="card-body blog-card-body">
                      <p className="p font-urbanist line-height-7 blog-card-date fw-400 mb-20">
                        17 August, 2022
                      </p>
                      <a>
                        <span className="card-title h5 fw-600 line-height-3 black-color">
                          This article attempts to list the built-in data
                          structures available in JavaScript and what properties
                          they have.
                        </span>
                      </a>
                      <a>
                        <div className="blog-card-btn d-flex align-items-center mt-4">
                          <a
                            href="https://dev.to/aniksaha12/javascript-es6-data-type-13ee"
                            target="_blank"
                          >
                            <span className="blog-card-btn-text mr-10 .font-urbanist fw-600 line-height-7 orange-color">
                              Read More
                            </span>
                          </a>
                          <i className="fa-solid fa-arrow-right" />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="card p-0 blog-card">
                    <div className="img-overlay">
                      <img
                        src="img/loop.png"
                        className="card-img-top img-fluid blog-card-img"
                        alt="blog image"
                      />
                    </div>
                    <div className="card-body blog-card-body">
                      <p className="p font-urbanist line-height-7 blog-card-date fw-400 mb-20">
                        26 August, 2022
                      </p>
                      <a>
                        <span className="card-title h5 fw-600 line-height-3 black-color">
                          Loops offer a quick and easy way to do something
                          repeatedly. This chapter of the JavaScript Guide
                          introduces the different iteration statements
                          available to JavaScript.
                        </span>
                      </a>
                      <a>
                        <div className="blog-card-btn d-flex align-items-center mt-4">
                          <a
                            href="https://dev.to/aniksaha12/javascript-loops-4gdg"
                            target="_blank"
                          >
                            <span className="blog-card-btn-text mr-10 .font-urbanist fw-600 line-height-7 orange-color">
                              Read More
                            </span>
                          </a>
                          <i className="fa-solid fa-arrow-right" />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="card p-0 blog-card">
                    <div className="img-overlay">
                      <img
                        src="img/reactDom.png"
                        className="card-img-top img-fluid blog-card-img"
                        alt="blog image"
                      />
                    </div>
                    <div className="card-body blog-card-body">
                      <p className="p font-urbanist line-height-7 blog-card-date fw-400 mb-20">
                        19 July, 2023
                      </p>
                      <a>
                        <span className="card-title h5 fw-600 line-height-3 black-color">
                          React popularized something called the Virtual DOM.
                          The virtual DOM is only a virtual representation of
                          the actual DOM.
                        </span>
                      </a>
                      <a>
                        <div className="blog-card-btn d-flex align-items-center mt-4">
                          <a
                            href="https://dev.to/aniksaha12/reactjs-virtual-dom-1jff"
                            target="_blank"
                          >
                            <span className="blog-card-btn-text mr-10 .font-urbanist fw-600 line-height-7 orange-color">
                              Read More
                            </span>
                          </a>
                          <i className="fa-solid fa-arrow-right" />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="card p-0 blog-card">
                    <div className="img-overlay">
                      <img
                        src="img/useEffect.jpeg"
                        className="card-img-top img-fluid blog-card-img"
                        alt="blog image"
                      />
                    </div>
                    <div className="card-body blog-card-body">
                      <p className="p font-urbanist line-height-7 blog-card-date fw-400 mb-20">
                        25 February, 2024
                      </p>
                      <a>
                        <span className="card-title h5 fw-600 line-height-3 black-color">
                          When to Use React Query or useEffect for Data
                          Fetching.
                        </span>
                      </a>
                      <a>
                        <div className="blog-card-btn d-flex align-items-center mt-4">
                          <a
                            href="https://dev.to/aniksaha12/when-to-use-react-query-or-useeffect-for-data-fetching-42an"
                            target="_blank"
                          >
                            <span className="blog-card-btn-text mr-10 .font-urbanist fw-600 line-height-7 orange-color">
                              Read More
                            </span>
                          </a>
                          <i className="fa-solid fa-arrow-right" />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="card p-0 blog-card">
                    <div className="img-overlay">
                      <img
                        src="img/sqlimage.jpeg"
                        className="card-img-top img-fluid blog-card-img"
                        alt="blog image"
                      />
                    </div>
                    <div className="card-body blog-card-body">
                      <p className="p font-urbanist line-height-7 blog-card-date fw-400 mb-20">
                        29 March, 2024
                      </p>
                      <a>
                        <span className="card-title h5 fw-600 line-height-3 black-color">
                        How to optimize SQL queries
                        </span>
                      </a>
                      <a>
                        <div className="blog-card-btn d-flex align-items-center mt-4">
                          <a
                            href="https://dev.to/aniksaha12/how-to-optimize-sql-queries-3517"
                            target="_blank"
                          >
                            <span className="blog-card-btn-text mr-10 .font-urbanist fw-600 line-height-7 orange-color">
                              Read More
                            </span>
                          </a>
                          <i className="fa-solid fa-arrow-right" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-heading-middle mt-5">
                <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                  Research Paper
                </h2>
              </div>
              <div className="blogs-container row-mobile-margin mt-50">
                <div
                  className="modal fade"
                  id="blogModalOne"
                  tabIndex={-1}
                  aria-hidden="true"
                ></div>
                <div className="card p-0 blog-card">
                  <div className="img-overlay">
                    <img
                      src="img/laser.jpeg"
                      className="card-img-top img-fluid blog-card-img"
                      alt="blog image"
                    />
                  </div>
                  <div className="card-body blog-card-body">
                    <p className="p font-urbanist line-height-7 blog-card-date fw-600 mb-20">
                      Published in: 2020 IEEE Bangalore Humanitarian Technology
                      Conference (B-HTC)
                    </p>
                    <p className="black-color h5font-urbanist line-height-7 blog-card-date fw-600 mb-20">
                      <a href="https://ieeexplore.ieee.org/document/9297980">
                        DOI:10.1109/B-HTC50970.2020.9297980
                      </a>
                    </p>
                    <a>
                      <span className="card-title h5 fw-600 line-height-3 black-color">
                        In this paper, we have illustrated a whole new method
                        for determining structural vibrations using laser based
                        non-contact vibration measurement technique in real time
                        including a proper method for data acquisition and
                        advanced processing of that data for the extraction of
                        important parameters which further determines the state
                        of the structure being monitored.
                      </span>
                    </a>
                    <a>
                      <div className="blog-card-btn d-flex align-items-center mt-4">
                        <a
                          href="https://www.researchgate.net/publication/348148102_Laser_Based_Vibration_Measurement_For_Structural_Health_Monitoring"
                          target="_blank"
                        >
                          <span className="blog-card-btn-text mr-10 .font-urbanist fw-600 line-height-7 orange-color">
                            Read More
                          </span>
                        </a>
                        <i className="fa-solid fa-arrow-right" />
                      </div>
                    </a>
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
