import React from "react";
import Testimonial from "../Testimonial/Testimonial";
import Skills from "../Skills/Skills";

export default function About() {
  return (
    <>
      <section className="about ">
        <div className="container">
          <div className="col-12">
            <div className="row align-items-center">
              <div className="about-text-col col-12">
                <div className="about-text-top">
                  <div className="section-heading-middle">
                    <div className="sub-heading d-flex align-items-center mx-auto">
                      <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                        About me
                      </h2>
                    </div>
                  </div>
                  <h5 className="secondary-black line-height-7 mt-20">
                    I'm 24 years old <strong>Software Engineer.</strong> My
                    expertise is in{" "}
                    <strong>
                      Frontend Web Development as well as backend.
                    </strong>{" "}
                    I am dedicated to enhancing our web applications for better
                    user-friendliness and simplicity.
                    <br />
                    <br />
                    Apart from that, I also participate in hackathons and open
                    source projects. I was one of the finalists in the{" "}
                    <strong>Smart India Hackathon 2020.</strong> Additionally, I
                    contributed to{" "}
                    <strong>Hacktoberfest in 2021 and 2022.</strong>
                    <br />
                    <br />I am also a{" "}
                    <strong>
                      member of the IEEE Bangalore section and an ex-student
                      member of IEEE.
                    </strong>{" "}
                    I am the{" "}
                    <strong>primary author of IEEE Digital Explorer.</strong> I
                    have also primary authored a research paper that is{" "}
                    <strong>published in the IEEE Digital Explorer.</strong>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Skills />
      <Testimonial />
    </>
  );
}
