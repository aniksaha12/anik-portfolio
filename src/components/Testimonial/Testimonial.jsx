import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  const testimonialData = [
    {
      name: "John K. Meraz",
      title: "CTO, Xyz Group",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, making it over 2000 years old.",
      image: "img/testimonialOne.png",
    },
    {
      name: "Johan Smith",
      title: "CEO, Abc Agency",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, making it over 2000 years old.",
      image: "img/testimonialTwo.png",
    },
    {
      name: "Robert E. Wolf",
      title: "Director, Techso",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, making it over 2000 years old.",
      image: "img/testimonialThree.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <section id="testimonial" className="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="testimonial-wrapper">
                <div className="section-heading-middle">
                  <div className="sub-heading d-flex align-items-center mx-auto">
                    {/* <img src="img/orangeDot.png" alt="orange-dot" /> */}
                    <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                      Testimonial
                    </h2>
                  </div>
                </div>
                <div className="testimonial-list-container row-mobile-margin mt-50">
                  <Slider {...settings}>
                    {testimonialData.map((testimonial, index) => (
                      <div key={index} className="item">
                        <div className="testimonial-card">
                          <div className="bio d-flex align-items-center">
                            <img
                              className="bio-img"
                              src={testimonial.image}
                              alt="testimonial-image"
                            />
                            <div>
                              <h3 className="h3 fw-500 line-height-3 black-color">
                                {testimonial.name}
                              </h3>
                              <p className="p fw-400 line-height-7 secondary-black">
                                {testimonial.title}
                              </p>
                            </div>
                          </div>
                          <p className="p line-height-7 fw-400 secondary-black mt-20">
                            {testimonial.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
