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
                  <p className="black-color">Let's Get in Touch</p>
                  <div className="contact-grid-container mt-1 d-flex align-items-center">
                    <div className="contact-grid-item text-center">
                      <a href="https://github.com/aniksaha12" target="_blank">
                        <img
                          className="html-item-img"
                          src="img/github.png"
                          alt="html-img-one"
                          style={{ width: "60px", height: "60px" }}
                        />
                      </a>
                    </div>

                    <div className="contact-grid-item text-center">
                      <a
                        href="https://www.linkedin.com/in/anik-saha-197259168/"
                        target="_blank"
                      >
                        <img
                          className="html-item-img"
                          src="img/linkedin.png"
                          alt="html-img-one"
                          style={{ width: "60px", height: "60px" }}
                        />
                      </a>
                    </div>
                    <div className="contact-grid-item text-center">
                      <a href="https://twitter.com/Aniksaha30" target="_blank">
                        <img
                          className="html-item-img"
                          src="img/Twitter.png"
                          alt="html-img-one"
                          style={{ width: "60px", height: "60px" }}
                        />
                      </a>
                    </div>
                    <div className="contact-grid-item text-center">
                      <a href="mailto:aniksaha859@gmail.com">
                        <img
                          className="html-item-img"
                          src="img/mail.png"
                          alt="html-img-one"
                          style={{ width: "60px", height: "60px" }}
                        />
                      </a>
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
