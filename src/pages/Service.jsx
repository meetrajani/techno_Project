import {
  faArrowRight,
  faArrowUpRightDots,
  faBookOpen,
  faChevronRight,
  faLaptop,
  faLaptopCode,
  faSliders,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Why_choose_us from "./Why_choose_us";
import Testimonial_Carousel from "./Testimonial_Carousel";
import Brand_icon from "./Brand_icon";

const Service = () => {
  return (
    <div>
      <section className="about_one">
        <div className="about_data">
          <div className="container">
            <div className="about_text">
              <h1>Service One</h1>
              <div className="about_pages">
                <a href="#">Home</a>
                <FontAwesomeIcon
                  className="about_icons"
                  icon={faChevronRight}
                />{" "}
                <a href="#">Pages</a>
                <FontAwesomeIcon
                  className="about_icons"
                  icon={faChevronRight}
                />{" "}
                <a href="#">Service One</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service_provide_exclusive">
        <div className="container">
          <div className="Provide-Exclusive-top-data">
            <p>SERVICES</p>
            <h1>Provide Exclusive Services</h1>
            <div className="em_bar_bg"></div>
            <div className="row">
              <div className="col-4">
                <div className="border-exclusive">
                  <div className="exclusive-card">
                    <div className="exclusive-card-top">
                      <div className="exclusive-card-top-img">
                        <FontAwesomeIcon icon={faUserLock} />
                      </div>
                    </div>
                    <div className="exclusive-card-bottum">
                      <div className="exclusive-card-bottum-data">
                        <div className="card-bottum-data">
                          <h3>Marketing Strategy</h3>
                          <p>
                            Porem asum molor sit amet, consectetur adipiscing do
                            miusmod tempor.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="border-exclusive">
                  <div className="exclusive-card">
                    <div className="exclusive-card-top">
                      <div className="exclusive-card-top-img">
                        <FontAwesomeIcon icon={faLaptop} />
                      </div>
                    </div>
                    <div className="exclusive-card-bottum">
                      <div className="exclusive-card-bottum-data">
                        <div className="card-bottum-data">
                          <h3>Interior Design</h3>
                          <p>
                            Porem asum molor sit amet, consectetur adipiscing do
                            miusmod tempor.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="border-exclusive">
                  <div className="exclusive-card">
                    <div className="exclusive-card-top">
                      <div className="exclusive-card-top-img">
                        <FontAwesomeIcon icon={faLaptopCode} />
                      </div>
                    </div>
                    <div className="exclusive-card-bottum">
                      <div className="exclusive-card-bottum-data">
                        <div className="card-bottum-data">
                          <h3>Digital Services</h3>
                          <p>
                            Porem asum molor sit amet, consectetur adipiscing do
                            miusmod tempor.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="border-exclusive">
                  <div className="exclusive-card">
                    <div className="exclusive-card-top">
                      <div className="exclusive-card-top-img">
                        <FontAwesomeIcon icon={faBookOpen} />
                      </div>
                    </div>
                    <div className="exclusive-card-bottum">
                      <div className="exclusive-card-bottum-data">
                        <div className="card-bottum-data">
                          <h3>Product Selling</h3>
                          <p>
                            Porem asum molor sit amet, consectetur adipiscing do
                            miusmod tempor.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="border-exclusive">
                  <div className="exclusive-card">
                    <div className="exclusive-card-top">
                      <div className="exclusive-card-top-img">
                        <FontAwesomeIcon icon={faArrowUpRightDots} />
                      </div>
                    </div>
                    <div className="exclusive-card-bottum">
                      <div className="exclusive-card-bottum-data">
                        <div className="card-bottum-data">
                          <h3>Product Design</h3>
                          <p>
                            Porem asum molor sit amet, consectetur adipiscing do
                            miusmod tempor.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="border-exclusive">
                  <div className="exclusive-card">
                    <div className="exclusive-card-top">
                      <div className="exclusive-card-top-img">
                        <FontAwesomeIcon icon={faSliders} />
                      </div>
                    </div>
                    <div className="exclusive-card-bottum">
                      <div className="exclusive-card-bottum-data">
                        <div className="card-bottum-data">
                          <h3>Digital Services</h3>
                          <p>
                            Porem asum molor sit amet, consectetur adipiscing do
                            miusmod tempor.
                          </p>
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
      <Why_choose_us />
      <section className="pricing_and_plan">
        <div className="container">
          <div className="pricing_and_plan_top_data">
            <p>PRICING AND PLAN</p>
            <h2>Choose Your Best Plan</h2>
            <div className="em_bar_bg"></div>
          </div>
          <div className="pricing_and_plan_bottom_data">
            <div className="row">
              <div className="col-4">
                <div className="card_bordar">
                  <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-body">
                      <h3 className="card-title pricing-card-title">
                        Basic Plan
                      </h3>
                      <ul className="list-unstyled mt-3 mb-4">
                        <li>30 Days Trial Features</li>
                        <li>Synced To Cloud Database</li>
                        <li>10 Hours Of Support</li>
                        <li>Social Media Integration</li>
                        <li>Unlimited Features</li>
                      </ul>
                      <h2 className="card_Pricing">
                        <h2 className="card-_Pricing pricing-card-title">
                          $49.99
                          <small className="text-body-secondary fw-light">
                            /month
                          </small>
                        </h2>
                      </h2>
                      <button
                        type="button"
                        className="w-100 btn btn-lg btn-outline-primary"
                      >
                        Choose Plan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card_bordar">
                  <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-body">
                      <h3 className="card-title pricing-card-title">
                        Basic Plan
                      </h3>
                      <ul className="list-unstyled mt-3 mb-4">
                        <li>30 Days Trial Features</li>
                        <li>Synced To Cloud Database</li>
                        <li>10 Hours Of Support</li>
                        <li>Social Media Integration</li>
                        <li>Unlimited Features</li>
                      </ul>
                      <h2 className="card_Pricing">
                        <h2 className="card-_Pricing pricing-card-title">
                          $49.99
                          <small className="text-body-secondary fw-light">
                            /month
                          </small>
                        </h2>
                      </h2>
                      <button
                        type="button"
                        className="w-100 btn btn-lg btn-outline-primary"
                      >
                        Choose Plan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card_bordar">
                  <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-body">
                      <h3 className="card-title pricing-card-title">
                        Basic Plan
                      </h3>
                      <ul className="list-unstyled mt-3 mb-4">
                        <li>30 Days Trial Features</li>
                        <li>Synced To Cloud Database</li>
                        <li>10 Hours Of Support</li>
                        <li>Social Media Integration</li>
                        <li>Unlimited Features</li>
                      </ul>
                      <h2 className="card_Pricing">
                        <h2 className="card-_Pricing pricing-card-title">
                          $49.99
                          <small className="text-body-secondary fw-light">
                            /month
                          </small>
                        </h2>
                      </h2>
                      <button
                        type="button"
                        className="w-100 btn btn-lg btn-outline-primary"
                      >
                        Choose Plan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service_one_to_make">
        <Testimonial_Carousel/>
      </section>
      <Brand_icon/>
    </div>
  );
};

export default Service;
