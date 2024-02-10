import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Resume() {
  return (
    <div>
      <section id="resume">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading-middle mt-5">
                <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                  Experiences
                </h2>
              </div>
              <div className="card mt-5">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h3 className="text-lg font-weight-bold text-gray-900">
                        Software Engineer
                        <p className="text-lg text-gray-600">
                          Goflysmart Holidays
                        </p>
                      </h3>
                    </div>
                    <p className="text-lg font-normal text-gray-500">
                      May 2023 - Present
                    </p>
                  </div>
                  <div className="flex flex-row flex-wrap rounded-circle">
                    <span
                      className="mt-2 me-2 badge badge-pill badge-primary"
                      style={{ color: "#FF6B00", fontSize: "1.1em" }}
                    >
                      ReactJS
                    </span>
                    <span
                      className="mt-2 me-2 badge badge-pill badge-primary"
                      style={{ color: "#FF6B00", fontSize: "1.1em" }}
                    >
                      ExpressJs
                    </span>
                    <span
                      className="mt-2 me-2 badge badge-pill badge-primary"
                      style={{ color: "#FF6B00", fontSize: "1.1em" }}
                    >
                      Azure
                    </span>
                    <span
                      className="mt-2 me-2 badge badge-pill badge-primary"
                      style={{ color: "#FF6B00", fontSize: "1.1em" }}
                    >
                      SQL
                    </span>
                    <span
                      className="mt-2 me-2 badge badge-pill badge-primary"
                      style={{ color: "#FF6B00", fontSize: "1.1em" }}
                    >
                      Javascript
                    </span>
                  </div>
                  <div>
                    <div className="flex text-lg col-lg-12">
                      <ul className="max-w-3xl space-y-1 text-gray-900 list-inside bold">
                        <li className="flex items-baseline mt-3">
                          <span>
                            Led the complete overhaul and integration of a new
                            flight booking web system from scratch using
                            React.js and Redux, seamlessly integrating with a
                            new live API.
                          </span>
                        </li>
                        <li className="flex items-baseline mt-2">
                          <span>
                            Optimized the application to handle a high daily
                            volume of hits efficiently. Achieved a 30% increase
                            in Lighthouse score for enhanced performance.
                          </span>
                        </li>
                        <li className="flex items-baseline mt-2 ">
                          <span>
                            Created a new custom API documentation design and
                            functionality like Postman which is used for client.
                          </span>
                        </li>
                        <li className="flex items-baseline mt-2 ">
                          <span>
                            Optimised the frontend code of a communication
                            application to improve web performance.
                          </span>
                        </li>
                        <li className="flex items-baseline mt-2 ">
                          <span>
                            created a new API management system in azure for the
                            updated version api.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h3 className="text-lg font-weight-bold text-gray-900">
                        Software Engineer Intern
                        <p className="text-lg text-gray-600">
                          Goflysmart Holidays
                        </p>
                      </h3>
                    </div>
                    <p className="text-lg font-normal text-gray-500">
                      March 2023 - April 2023
                    </p>
                  </div>
                  <div className="flex flex-row flex-wrap rounded-circle">
                    <span
                      className="mt-2 me-2 badge badge-pill badge-primary"
                      style={{ color: "#FF6B00", fontSize: "1.1em" }}
                    >
                      ReactJS
                    </span>
                    <span
                      className="mt-2 me-2 badge badge-pill badge-primary"
                      style={{ color: "#FF6B00", fontSize: "1.1em" }}
                    >
                      ExpressJs
                    </span>
                    <span
                      className="mt-2 me-2 badge badge-pill badge-primary"
                      style={{ color: "#FF6B00", fontSize: "1.1em" }}
                    >
                      Azure
                    </span>
                    <span
                      className="mt-2 me-2 badge badge-pill badge-primary"
                      style={{ color: "#FF6B00", fontSize: "1.1em" }}
                    >
                      SQL
                    </span>
                    <span
                      className="mt-2 me-2 badge badge-pill badge-primary"
                      style={{ color: "#FF6B00", fontSize: "1.1em" }}
                    >
                      Javascript
                    </span>
                  </div>
                  <div>
                    <div className="flex text-lg col-lg-12">
                      <ul className="max-w-3xl space-y-1 text-gray-900 list-inside bold">
                        <li className="flex items-baseline mt-3">
                          <span>
                            Use postman for api testing with test cases along
                            with use JMeter for api load testing to optimise our
                            api.Utilizing Azure API Management, I successfully
                            managed these APIs, offering a centralized gateway
                            for our clients.
                          </span>
                        </li>
                        <li className="flex items-baseline mt-2">
                          <span>
                            To enhance security further, I implemented a virtual
                            network in Azure, creating a secure environment to
                            protect our APIs and sensitive data.
                          </span>
                        </li>
                        <li className="flex items-baseline mt-2 ">
                          <span>
                            I developed reusable components using React.js,
                            providing modular and efficient solutions for our
                            web applications.
                          </span>
                        </li>
                      </ul>
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
