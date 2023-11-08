import React from "react";
import Header from "../Header/Header";

export default function Projects() {
  return (
    <div>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="portfolio-wrapper">
                <div className="section-heading-middle">
                  <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                    My Projects
                  </h2>
                </div>
                <div className="mt-50 row-mobile-margin">
                  <div className="portfolio-massonary-container">
                    <div className="portfolio-massonary-items mix ui all position-relative">
                      <div
                        className="modal fade"
                        id="portfolioModalOne"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered justify-content-center">
                          <div>
                            <button
                              type="button"
                              className="btn-close mb-10 btn"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                            <img
                              className="img-fluid"
                              src="img/portfolioOne.png"
                              alt="portfolio img"
                            />
                          </div>
                        </div>
                      </div>
                      <img
                        className="img-fluid"
                        src="img/portfolioOne.png"
                        alt="portfolio img"
                      />
                      <div className="portfolio-card-overlay w-100 position-absolute top-0"></div>
                      <div className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                        <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                          <p className="text-white fw-400 line-height-7">
                            <div className="model-body">
                              <h5 className="model-title">
                                Duplicate-date-tool
                              </h5>
                              <p>
                                Project Description: Analyzing sales data with
                                duplicate transaction dates.
                              </p>
                              <p className>
                                <a
                                  href="https://duplicatedatefinder.netlify.app/"
                                  target="_blank"
                                >
                                  Website Link
                                </a>
                              </p>
                              <p>
                                <a
                                  href="https://github.com/aniksaha12/duplicate-date-tool"
                                  target="_blank"
                                >
                                  GitHub Link
                                </a>
                              </p>
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-massonary-items mix graphic all position-relative">
                      <div
                        className="modal fade"
                        id="portfolioModalTwo"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered justify-content-center">
                          <div>
                            <button
                              type="button"
                              className="btn-close mb-10 btn"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                            <img
                              className="img-fluid"
                              src="img/portfolioTwo.png"
                              alt="portfolio img"
                            />
                          </div>
                        </div>
                      </div>
                      <img
                        className="img-fluid"
                        src="img/portfolioTwo.png"
                        alt="portfolio img"
                      />
                      <div className="portfolio-card-overlay w-100 position-absolute top-0"></div>
                      <div className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                        <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                          <p className="text-white fw-400 line-height-7">
                            <div className="model-body">
                              <h5 className="model-title">Google Docs</h5>
                              <p>
                                Project Description: Write documentaions and
                                notes
                              </p>
                              <p className>
                                <a
                                  href="https://mydoc-1.netlify.app/"
                                  target="_blank"
                                >
                                  Website Link
                                </a>
                              </p>
                              <p>
                                <a
                                  href="https://github.com/aniksaha12/google-docs"
                                  target="_blank"
                                >
                                  GitHub Link
                                </a>
                              </p>
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-massonary-items mix ui graphic all position-relative">
                      <div
                        className="modal fade"
                        id="portfolioModalThree"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered justify-content-center">
                          <div>
                            <button
                              type="button"
                              className="btn-close mb-10 btn"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                            <img
                              className="img-fluid"
                              src="img/portfolioThree.png"
                              alt="portfolio img"
                            />
                          </div>
                        </div>
                      </div>
                      <img
                        className="img-fluid"
                        src="img/portfolioThree.png"
                        alt="portfolio img"
                      />
                      <div className="portfolio-card-overlay w-100 position-absolute top-0"></div>
                      <div className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                        <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                          <p className="text-white fw-400 line-height-7">
                            <div className="model-body">
                              <h5 className="model-title">
                                Random Password Generator
                              </h5>
                              <p>
                                Project Description: Create Random Password with
                                generator
                              </p>
                              <p className>
                                <a
                                  href="https://cool-raindrop-a14d37.netlify.app/"
                                  target="_blank"
                                >
                                  Website Link
                                </a>
                              </p>
                              <p>
                                <a
                                  href="https://github.com/aniksaha12/randam-password-generator"
                                  target="_blank"
                                >
                                  GitHub Link
                                </a>
                              </p>
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-massonary-items mix web all position-relative">
                      <div
                        className="modal fade"
                        id="portfolioModalFour"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered justify-content-center">
                          <div>
                            <button
                              type="button"
                              className="btn-close mb-10 btn"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                            <img
                              className="img-fluid"
                              src="img/portfolioFour.png"
                              alt="portfolio img"
                            />
                          </div>
                        </div>
                      </div>
                      <img
                        className="img-fluid"
                        src="img/portfolioFour.png"
                        alt="portfolio img"
                      />
                      <div className="portfolio-card-overlay w-100 position-absolute top-0"></div>
                      <div className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                        <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                          <p className="text-white fw-400 line-height-7">
                            <div className="model-body">
                              <h5 className="model-title">
                                E-commerce website
                              </h5>
                              <p>
                                Project Description: Shopping and cart items
                              </p>
                              <p className>
                                <a
                                  href="https://mybazzzar.netlify.app/"
                                  target="_blank"
                                >
                                  Website Link
                                </a>
                              </p>
                              <p>
                                <a
                                  href="https://github.com/aniksaha12/E-commerce-"
                                  target="_blank"
                                >
                                  GitHub Link
                                </a>
                              </p>
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-massonary-items mix app all position-relative">
                      <div
                        className="modal fade"
                        id="portfolioModalFive"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered justify-content-center">
                          <div>
                            <button
                              type="button"
                              className="btn-close mb-10 btn"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                            <img
                              className="img-fluid"
                              src="img/portfolioFive.png"
                              alt="portfolio img"
                            />
                          </div>
                        </div>
                      </div>
                      <img
                        className="img-fluid"
                        src="img/portfolioFive.png"
                        alt="portfolio img"
                      />
                      <div className="portfolio-card-overlay w-100 position-absolute top-0"></div>
                      <div className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                        <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                          <p className="text-white fw-400 line-height-7">
                            <div className="model-body">
                              <h5 className="model-title">AI chat messenger</h5>
                              <p>
                                Project Description: Ask AI any information you
                                get
                              </p>
                              <p className>
                                <a
                                  href="https://chatgpt-messenger-yt-swart.vercel.app/"
                                  target="_blank"
                                >
                                  Website Link
                                </a>
                              </p>
                              <p>
                                <a
                                  href="https://github.com/aniksaha12/mychatGPT"
                                  target="_blank"
                                >
                                  GitHub Link
                                </a>
                              </p>
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <div className="portfolio-massonary-items mix branding all position-relative">
                      <div
                        className="modal fade"
                        id="portfolioModalSix"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered justify-content-center">
                          <div>
                            <button
                              type="button"
                              className="btn-close mb-10 btn"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                            <img
                              className="img-fluid"
                              src="img/portfolioSix.png"
                              alt="portfolio img"
                            />
                          </div>
                        </div>
                      </div>
                      <img
                        className="img-fluid"
                        src="img/portfolioSix.png"
                        alt="portfolio img"
                      />
                      <div className="portfolio-card-overlay w-100 position-absolute top-0"></div>
                      <div className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                        <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                          <p className="text-white fw-400 line-height-7">
                            Graphic Design
                          </p>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#portfolioModalSix"
                            href="#portfolioSix"
                            className="h4 text-white fw-600 line-height-3"
                          >
                            The best way to impress your web
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-massonary-items mix web all position-relative">
                      <div
                        className="modal fade"
                        id="portfolioModalSeven"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered justify-content-center">
                          <div>
                            <button
                              type="button"
                              className="btn-close mb-10 btn"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                            <img
                              className="img-fluid"
                              src="img/portfolioSeven.png"
                              alt="portfolio img"
                            />
                          </div>
                        </div>
                      </div>
                      <img
                        className="img-fluid"
                        src="img/portfolioSeven.png"
                        alt="portfolio img"
                      />
                      <div className="portfolio-card-overlay w-100 position-absolute top-0"></div>
                      <div className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                        <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                          <p className="text-white fw-400 line-height-7">
                            Graphic Design
                          </p>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#portfolioModalSeven"
                            href="#portfolioSeven"
                            className="h4 text-white fw-600 line-height-3"
                          >
                            The best way to impress your web
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-massonary-items mix app all position-relative">
                      <div
                        className="modal fade"
                        id="portfolioModalEight"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered justify-content-center">
                          <div>
                            <button
                              type="button"
                              className="btn-close mb-10 btn"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                            <img
                              className="img-fluid"
                              src="img/portfolioEight.png"
                              alt="portfolio img"
                            />
                          </div>
                        </div>
                      </div>
                      <img
                        className="img-fluid"
                        src="img/portfolioEight.png"
                        alt="portfolio img"
                      />
                      <div className="portfolio-card-overlay w-100 position-absolute top-0"></div>
                      <div className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                        <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                          <p className="text-white fw-400 line-height-7">
                            Graphic Design
                          </p>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#portfolioModalEight"
                            href="#portfolioEight"
                            className="h4 text-white fw-600 line-height-3"
                          >
                            The best way to impress your web
                          </a>
                        </div>
                      </div>
                    </div> */}
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
