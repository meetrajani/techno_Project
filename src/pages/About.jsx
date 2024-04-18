import {
  faArrowRight,
  faChevronRight,
  faDesktop,
  faGlobe,
  faPhoneVolume,
  faPlay,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import slider_10 from "../IMG/slider-10.jpg";
import React from "react";
import team1 from "../IMG/team1.jpg";
import team2 from "../IMG/team2.jpg";
import team3 from "../IMG/team3.jpg";
import team4 from "../IMG/team4.jpg";
import Why_choose_us from "./Why_choose_us";
import Brand_icon from "./Brand_icon";
import Provide_best from "./Provide_best";
import Clients_says from "./Clients_says";

const About = () => {
  return (
    <div>
      <section className="about_one">
        <div className="about_data">
          <div className="container">
            <div className="about_text">
              <h1>About One</h1>
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
                <a href="#">About One</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Provide_best/>
      <section className="about_one_Responsive_Design">
        <div className="container It-Services-container">
          <div className="row it-services-row">
            <div className="col-3 it-services-col-6">
              <div className="it-services-card">
                <div className="border-it-services">
                  <div className="row it-card-row">
                    <div className="col-6 it-card-col-6">
                      <div className="icons-it">
                        <FontAwesomeIcon icon={faDesktop} />
                      </div>
                    </div>
                    <div className="col-6 it-card-col-6">
                      <div className="it-card-data">
                        <h3>Responsive Design</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 it-services-col-6">
              <div className="it-services-card">
                <div className="border-it-services">
                  <div className="row it-card-row">
                    <div className="col-6 it-card-col-6">
                      <div className="icons-it">
                        <FontAwesomeIcon icon={faPhoneVolume} />
                      </div>
                    </div>
                    <div className="col-6 it-card-col-6">
                      <div className="it-card-data">
                        <h3>24/7 Online Support</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 it-services-col-6">
              <div className="it-services-card">
                <div className="border-it-services">
                  <div className="row it-card-row">
                    <div className="col-6 it-card-col-6">
                      <div className="icons-it">
                        <FontAwesomeIcon icon={faUserTie} />
                      </div>
                    </div>
                    <div className="col-6 it-card-col-6">
                      <div className="it-card-data">
                        <h3>Quality Product</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 it-services-col-6">
              <div className="it-services-card">
                <div className="border-it-services">
                  <div className="row it-card-row">
                    <div className="col-6 it-card-col-6">
                      <div className="icons-it">
                        <FontAwesomeIcon icon={faGlobe} />
                      </div>
                    </div>
                    <div className="col-6 it-card-col-6">
                      <div className="it-card-data">
                        <h3>Productiv Software</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Why_choose_us/>
      <section className="about_one_our_awesome_creative">
        <div className="container">
          <div className="row our-awesome-top-row">
            <div className="col-lg-9 our-awesome-top-col-9">
              <div className="our-awesome-top-data">
                <h6>TEAM MEMBER</h6>
                <h1>Our Awesome Creative</h1>
                <h1>Team Member</h1>
                <div className="em_bar_bg"></div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="our-awesome-top-button">
                <button className="btn btn-primary awesome-btn btn-sm">
                  Join Our Team
                </button>
              </div>
            </div>
          </div>
          <div className="row our-awesome-row-bottom-data">
            <div className="col-3 our-awesomecard-all-data">
              <div className="bottom-card-data">
                <div className="about_card_img">
                  <div className="card">
                    <img src={team1} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h4 className="card-text">David Malaan</h4>
                      <h5 className="card-text">CEO</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 our-awesomecard-all-data">
              <div className="bottom-card-data">
                <div className="card">
                  <img src={team2} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-text">Andres Jhohne</h4>
                    <h5 className="card-text">DIRECTOR</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 our-awesomecard-all-data">
              <div className="bottom-card-data">
                <div className="card">
                  <img src={team3} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-text">Michel Balak</h4>
                    <h5 className="card-text">FOUNDER</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 our-awesomecard-all-data">
              <div className="bottom-card-data">
                <div className="card">
                  <img src={team4} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-text">Jemes Rodrigez</h4>
                    <h5 className="card-text">MANAGER</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about_one_to_make">
        <div className="about_one_to_make_requests">
          <div className="container">
            <div className="to_make_requests_data">
              <div className="row to_make_requests_row">
                <div className="col-12 to_make_requests_col_9">
                  <div className="to_make_requests_text">
                    <h5>+880 013 143 206</h5>
                    <h2>To make requests for the</h2>
                    <h2 className="h2">further information</h2>
                    <div className="to_make_requests_button">
                      <button className="btn btn-light">
                        Join Woth Now{" "}
                        <FontAwesomeIcon
                          className="to_make_requests_button_icon"
                          icon={faArrowRight}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about_one_happy_clients">
          <div className="container">
            <div className="happy_clients_card_border">
              <div className="row happy_clients_row">
                <div className="col-3 happy_clients_col_3">
                  <div className="row happy_clients_card_row">
                    <div className="col-6 happy_clients_card_col_6">
                      <h2>15K</h2>
                    </div>
                    <div className="col-6 happy_clients_card_col_6">
                      <h5>Happy Clients</h5>
                    </div>
                  </div>
                </div>
                <div className="col-3 happy_clients_col_3">
                  <div className="row happy_clients_card_row">
                    <div className="col-6 happy_clients_card_col_6">
                      <h2>1280+</h2>
                    </div>
                    <div className="col-6 happy_clients_card_col_6">
                      <h5>Account Number</h5>
                    </div>
                  </div>
                </div>
                <div className="col-3 happy_clients_col_3">
                  <div className="row happy_clients_card_row">
                    <div className="col-6 happy_clients_card_col_6">
                      <h2>10K</h2>
                    </div>
                    <div className="col-6 happy_clients_card_col_6">
                      <h5>Finished Projects</h5>
                    </div>
                  </div>
                </div>
                <div className="col-3 happy_clients_col_3">
                  <div className="row happy_clients_card_row">
                    <div className="col-6 happy_clients_card_col_6">
                      <h2>992+</h2>
                    </div>
                    <div className="col-6 happy_clients_card_col_6">
                      <h5>Win Awards</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Clients_says/>
      <Brand_icon/>
    </div>
  );
};

export default About;
