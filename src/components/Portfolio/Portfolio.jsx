import React from "react";

export default function Portfolio() {
  return (
    <div>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="portfolio-wrapper">
                <div className="section-heading-middle">
                  <div className="sub-heading d-flex align-items-center mx-auto">
                    <img src="img/orangeDot.png" alt="orange-dot" />
                    <p>My Portfolio</p>
                  </div>
                  <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                    VISIT MY PORTFOLIO
                  </h2>
                </div>
                <div className="mt-50 row-mobile-margin">
                  <div className="controls d-flex justify-content-center flex-wrap gap-1 gap-lg-4 mb-45">
                    <button
                      type="button"
                      className="control filter btn .outline-0 border-0 secondary-black"
                      data-filter=".all"
                    >
                      All
                    </button>
                    <button
                      type="button"
                      className="control filter btn .outline-0 border-0 secondary-black"
                      data-filter=".ui"
                    >
                      UI/Ux Design
                    </button>
                    <button
                      type="button"
                      className="control filter btn .outline-0 border-0 secondary-black"
                      data-filter=".branding"
                    >
                      Branding Design
                    </button>
                    <button
                      type="button"
                      className="control filter btn .outline-0 border-0 secondary-black"
                      data-filter=".graphic"
                    >
                      Graphic Design
                    </button>
                    <button
                      type="button"
                      className="control filter btn .outline-0 border-0 secondary-black"
                      data-filter=".app"
                    >
                      App Development
                    </button>
                    <button
                      type="button"
                      className="control filter btn .outline-0 border-0 secondary-black"
                      data-filter=".web"
                    >
                      Web Design
                    </button>
                  </div>
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
                            Graphic Design
                          </p>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#portfolioModalOne"
                            href="#portfolioOne"
                            className="h4 text-white fw-600 line-height-3"
                          >
                            The best way to impress your web
                          </a>
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
                            Graphic Design
                          </p>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#portfolioModalTwo"
                            href="#portfolioTwo"
                            className="h4 text-white fw-600 line-height-3"
                          >
                            The best way to impress your web
                          </a>
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
                            Graphic Design
                          </p>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#portfolioModalThree"
                            href="#portfolioThree"
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
                            Graphic Design
                          </p>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#portfolioModalFour"
                            href="#portfolioFour"
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
                            Graphic Design
                          </p>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#portfolioModalFive"
                            href="#portfolioFive"
                            className="h4 text-white fw-600 line-height-3"
                          >
                            The best way to impress your web
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-massonary-items mix branding all position-relative">
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
