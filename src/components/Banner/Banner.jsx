import React from "react";

export default function Banner() {
  return (
    <div>
      <section className="home-banner position-relative py-4">
        <div className="container-fluid custom-container">
          <div className="row home-banner-wrapper align-items-center">
            <div className="col-lg-6 col-xl-7 home-banner-text-col position-relative">
              <div className="animate-heading">
                <h1 className="black-color h1 home-one-title ah-headline">
                  Hi, Welcome to{" "}
                  <span className="orange-color">
                    <span className="ah-words-wrapper">
                      <span className="is-visible">My space</span>
                    </span>
                  </span>
                  <br />
                </h1>
              </div>
              <p className="h4 line-height-7 mt-20 secondary-black fw-400 sm-p">
                I'm <strong>Anik Saha,</strong> a Software Engineer at <strong>Goflysmart Holidays.</strong>  My
                focus is on crafting user-friendly web applications that are
                widely accepted. I utilize tools like <strong>React.js </strong> and <strong>Node.js</strong>.
              </p>
              {/* <a
                className="btn_effect btn home-banner-btn orange-btn mt-50"
                href="/"
                download="AniksahaCv.pdf"
              >
                <span className="z-1 position-relative">Download My CV</span>
              </a> */}
            </div>
            <div className="col-lg-6 col-xl-5 text-center position-relative home-banner-img-col">
              <div className="rounded-image">
                <img
                  className="img-fluid position-relative z-index-10 home-banner-img"
                  src="img/aniksaha3.png"
                  alt="banner-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
