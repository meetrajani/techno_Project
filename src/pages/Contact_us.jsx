import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faClock,
  faMap,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

const Contact_us = () => {
  return (
    <div>
      <section className="about_one">
        <div className="about_data">
          <div className="container">
            <div className="about_text">
              <h1>Contact Us</h1>
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
                <a href="#">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="we_are_here">
        <div className="container">
          <div className="we_are_here_top_data">
            <div className="we_are_here_top_text">
              <p>CONTACT US</p>
              <h2>We Are Here For You</h2>
              <div className="em_bar_bg"></div>
            </div>
          </div>
          <div className="we_are_here_bottom_data">
            <div className="row we_are_here_bottom_row">
              <div className="col-4">
                <div className="border-exclusive">
                  <div className="exclusive-card">
                    <div className="exclusive-card-top">
                      <div className="exclusive-card-top-img">
                        <FontAwesomeIcon icon={faMap} />
                      </div>
                    </div>
                    <div className="exclusive-card-bottum">
                      <div className="exclusive-card-bottum-data">
                        <div className="card-bottum-data">
                          <h3>Enter Your Address</h3>
                          <p>54/1 New sorini Asut, Melbord Austria.</p>
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
                        <FontAwesomeIcon icon={faClock} />
                      </div>
                    </div>
                    <div className="exclusive-card-bottum">
                      <div className="exclusive-card-bottum-data">
                        <div className="card-bottum-data">
                          <h3>Opening Hours</h3>
                          <p>Mon - Thu: 10:00am - 05:00pm</p>
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
                        <FontAwesomeIcon icon={faPhoneVolume} />
                      </div>
                    </div>
                    <div className="exclusive-card-bottum">
                      <div className="exclusive-card-bottum-data">
                        <div className="card-bottum-data">
                          <h3>Contact Directly</h3>
                          <p>demo@example.com, 54786547521</p>
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
      <section className="feel_free_contact">
        <div className="container">
          <div className="feel_free_contact_top_data">
            <div className="feel_free_contact_top_text">
              <p>CONTACT US</p>
              <h2>Feel Free Contact</h2>
              <h2>Us Now</h2>
              <div className="em_bar_bg"></div>
            </div>
          </div>
          <div className="feel_free_contact_bottom_data">
            <div className="row feel_free_input_row">
              <div className="col-6">
                <div className="feel_free_input">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="feel_free_input">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="feel_free_input">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="feel_free_input">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Website"
                  />
                </div>
              </div>
            </div>
            <div className="row feel_free_textarea_row">
              <div className="col-12">
                <div className="feel_free_textarea">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="6"
                    placeholder="Write a Message"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row feel_free_button_row">
              <div className="col-12">
                <div className="feel_free_button">
                  <button className="btn btn-primary btn-lg">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact_us;
