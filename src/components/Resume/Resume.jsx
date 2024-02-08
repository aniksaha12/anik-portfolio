import React from "react";

export default function Resume() {
  return (
    <div>
      <section id="resume" className="">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h3 className="text-lg font-weight-bold text-gray-900">
                        Software Engineer
                      </h3>
                      <p className="text-lg text-gray-600">
                        @ Goflysmart Holidays
                      </p>
                    </div>
                      <p className="text-lg font-normal text-gray-500">
                      May 2022 - Present
                    </p>
                  </div>
                  <div className="flex flex-row flex-wrap rounded-circle">
                      <span className="mt-2 me-2 ">
                        ReactJS
                      </span>
                      <span className="mt-2 me-2">
                        VueJS
                      </span>
                      <span className="mt-2 me-2">
                        TypeScript
                      </span>
                      <span className="mt-2 me-2">
                        MUI
                      </span>
                      <span className="mt-2 me-2">
                        Azure DevOps
                      </span>
                    </div>
                  <div>
                  <div className="flex text-lg col-lg-6">
                    <ul className="max-w-3xl space-y-1 text-gray-500 list-inside">
                      <li className="flex items-baseline mt-3">
                        <span>
                          Developed reusable component for capturing user audio
                          data using webRTC and Vue.js.
                        </span>
                      </li>
                      <li className="flex items-baseline mt-3">
                        <span>
                          Built reusable component and integrate APIs with them
                          in React.js and TypeScript.
                        </span>
                      </li>
                      <li className="flex items-baseline mt-3">
                        <span>
                          Optimised the frontend code of a communication
                          application to improve web performance.
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
