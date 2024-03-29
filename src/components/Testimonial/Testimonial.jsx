import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  const testimonialData = [
    {
      name: "Deepankar Mondal",
      title: "Teach Lead @Tripfactory",
      text:
        "I've had the pleasure of working alongside Anik Saha, and I wholeheartedly recommend him. Anik is a dynamic all-rounder, consistently embracing new technologies with enthusiasm. His dedication to delivering top-tier work and his exceptional teamwork make him a standout colleague. Anik's positive attitude and continuous pursuit of excellence make him an asset to any project." +
        " Highly recommend Anik for his skills, eagerness to learn, and collaborative spirit! ",
      image: "img/deepankar.jpg",
    },

    {
      name: "Debajit Mallick",
      title: "Frontend @P360",
      text: "I highly recommend Anik Saha as a Software Engineer. During our time working together on various college projects, Anik consistently demonstrated exceptional problem-solving abilities and technical expertise. His dedication to finding innovative solutions and his strong grasp of technical concepts make him an invaluable asset to any team. Anik's commitment to excellence and his positive attitude make him a pleasure to work with. Any organization would be fortunate to have him on their team.",
      image: "img/debajit.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
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
