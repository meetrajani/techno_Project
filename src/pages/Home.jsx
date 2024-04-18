import React from "react";
import slider_1 from "../IMG/slider-1.png";
import slider_2 from "../IMG/slider-2.png";
import about_img from "../IMG/about-img.png";
import team1 from "../IMG/team1.jpg";
import team2 from "../IMG/team2.jpg";
import team3 from "../IMG/team3.jpg";
import {} from "@fortawesome/free-brands-svg-icons";
import team4 from "../IMG/team4.jpg";
import _1 from "../IMG/1.jpg";
import _3 from "../IMG/3.jpg";
import _4 from "../IMG/4.jpg";
import _5 from "../IMG/5.jpg";
import _6 from "../IMG/6.jpg";
import _7 from "../IMG/7.jpg";
import _8 from "../IMG/8.jpg";
import _2 from "../IMG/2.jpg";
import blog1 from "../IMG/blog1.jpg";
import blog2 from "../IMG/blog2.jpg";
import blog3 from "../IMG/blog3.jpg";
import {
  faArrowRight,
  faArrowRightLong,
  faCannabis,
  faCode,
  faGlobe,
  faInbox,
  faLaptopCode,
  faPlay,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Testimonial_Carousel from "./Testimonial_Carousel";
import Provide_Exclusive_Services from "./Provide_Exclusive_Services";

const Home = () => {
  return (
    <div>
      <section className="Best-IT">
        <div className="home-carousel">
          <div
            id="carouselExampleDark"
            data-bs-ride="carousel"
            className="carousel carousel-dark slide"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval={3000}>
                <img src={slider_1} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Total IT Solution Here</h5>
                  <h1>Best IT solution agency</h1>
                  <h1>for your Business </h1>
                  <div className="buttons">
                    <button className="btn btn-primary btn-lg getbutton text-nowrap me-2">
                      How IT Work
                    </button>
                    <button className="btn btn-primary btn-lg getbutton tow text-nowrap ms-2">
                      IT Services
                    </button>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval={3000}>
                <img src={slider_2} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Total IT Solution Here</h5>
                  <h1>Best IT solution agency</h1>
                  <h1>for your Business </h1>
                  <div className="buttons">
                    <button className="btn btn-primary btn-lg getbutton text-nowrap me-2">
                      How IT Work
                    </button>
                    <button className="btn btn-primary btn-lg getbutton tow text-nowrap ms-2">
                      IT Services
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="It-Services">
            <div className="container It-Services-container">
              <div className="row it-services-row">
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
                            <h3>Provide All Kind Of IT Services</h3>
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
                            <FontAwesomeIcon icon={faCannabis} />
                          </div>
                        </div>
                        <div className="col-6 it-card-col-6">
                          <div className="it-card-data">
                            <h3>Solution For All IT Security</h3>
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
                            <FontAwesomeIcon icon={faInbox} />
                          </div>
                        </div>
                        <div className="col-6 it-card-col-6">
                          <div className="it-card-data">
                            <h3>All IT Consultancy Solution</h3>
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
                            <FontAwesomeIcon icon={faCode} />
                          </div>
                        </div>
                        <div className="col-6 it-card-col-6">
                          <div className="it-card-data">
                            <h3>Best Experience Engineer</h3>
                          </div>
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
      <section className="Provide-Best">
        <div className="container">
          <div className="row provide-best-row">
            <div className="col-6 provide-best-col-6">
              <div className="provide-img">
                <img src={about_img} alt="" />
              </div>
            </div>
            <div className="col-6 provide-best-col-6">
              <div className="provide-all-data">
                <div className="provide-top-data">
                  <p>30 YEARS OF EXPERIENCE</p>
                  <h1>Preparing For Your Success</h1>
                  <h1>
                    Provide Best <samp>IT Solutions.</samp>
                  </h1>
                  <p className="data-p">
                    We are privileged to work with hundred future thinking
                    awesom business including many of the world’s top hardware
                  </p>
                  <div className="em_bar_bg"></div>
                </div>
                <div className="provide-bottom-data">
                  <div className="row">
                    <div className="col-1">
                      <div className="icon-bottom-data">
                        <FontAwesomeIcon icon={faUserLock} />
                      </div>
                    </div>
                    <div className="col-11">
                      <div className="data">
                        <h5>Warranty Management</h5>
                        <p>
                          Morem Ipsum is simply dummy text of the printing and
                          pepesetting found.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1">
                      <div className="icon-bottom-data">
                        <FontAwesomeIcon icon={faLaptopCode} />
                      </div>
                    </div>
                    <div className="col-11">
                      <div className="data">
                        <h5>Quality Control System</h5>
                        <p>
                          Morem Ipsum is simply dummy text of the printing and
                          pepesetting found.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Provide_Exclusive_Services />
      <section className="our-awesome-creative">
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
                <div className="card">
                  <img src={team1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-text">David Malaan</h4>
                    <h5 className="card-text">CEO</h5>
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
      <section className="features-case">
        <div className="container">
          <div className="features-case-top-data">
            <div className="features-case-top-alldata">
              <p>FEATURES CASE</p>
              <h2>Our Latest Case Study</h2>
              <h2>For Your Business</h2>
              <div className="em_bar_bg"></div>
            </div>
          </div>
        </div>
        <OwlCarousel
          className="owl-theme"
          loop
          margin={0}
          nav
          items={4}
          autoplay
          autoplayTimeout={3000}
          responsive={{
            0: { items: 1, nav: false },
            768: { items: 3, nav: false },
            1024: { items: 4, nav: false },
          }}
        >
          <div className="item">
            <img className="features-case-img" src={_1} alt="_1" />
            <div className="features-case-imgdata">
              <div className="img-data-card">
                <div className="ing-card-alldata">
                  <h2>Solution For Financial</h2>
                  <p>IT Server</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={_8} alt="" />
            <div className="features-case-imgdata">
              <div className="img-data-card">
                <div className="ing-card-alldata">
                  <h2>Solution For Financial</h2>
                  <p>IT Server</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={_3} alt="_3" />
            <div className="features-case-imgdata">
              <div className="img-data-card">
                <div className="ing-card-alldata">
                  <h2>Crazy Mood</h2>
                  <p>It Solution</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={_4} alt="_4" />
            <div className="features-case-imgdata">
              <div className="img-data-card">
                <div className="ing-card-alldata">
                  <h2>Logo Branding</h2>
                  <p>Branding</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={_5} alt="" />
            <div className="features-case-imgdata">
              <div className="img-data-card">
                <div className="ing-card-alldata">
                  <h2>Web Design</h2>
                  <p>Design, Photoshop</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={_6} alt="" />
            <div className="features-case-imgdata">
              <div className="img-data-card">
                <div className="ing-card-alldata">
                  <h2>Digital Marketing</h2>
                  <p>Business</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={_7} alt="" />
            <div className="features-case-imgdata">
              <div className="img-data-card">
                <div className="ing-card-alldata">
                  <h2>Photoshop Designer</h2>
                  <p>Photography</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={_2} alt="" />
            <div className="features-case-imgdata">
              <div className="img-data-card">
                <div className="ing-card-alldata">
                  <h2>Web Design</h2>
                  <p>Design, Photoshop</p>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </section>
      <section className="our-working-process">
        <div className="container">
          <div className="our-working-top-data">
            <p>FEATURES CASE</p>
            <h2>Our Working Process</h2>
            <div className="em_bar_bg"></div>
          </div>
          <div className="our-working-bottom-data">
            <div className="our-working-card">
              <div className="row our-working-card-row">
                <div className="col-4 our-working-card-col-4">
                  <div className="our-working-card-data">
                    <div className="our-working-card-top-data">
                      <p>1</p>
                    </div>
                    <div className="our-working-card-buttom-data">
                      <h4>Select A Project</h4>
                      <p>
                        We have the technology and industry expertise to develop
                        solutions that can connect people and businesses across
                        variety of mobile devices.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-4 our-working-card-col-4">
                  <div className="our-working-card-data">
                    <div className="our-working-card-top-data">
                      <p>2</p>
                    </div>
                    <div className="our-working-card-buttom-data">
                      <h4>Project Analysis</h4>
                      <p>
                        We have the technology and industry expertise to develop
                        solutions that can connect people and businesses across
                        variety of mobile devices.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-4 our-working-card-col-4">
                  <div className="our-working-card-data">
                    <div className="our-working-card-buttom-data-none">
                      <p>3</p>
                    </div>
                    <div className="our-working-card-buttom-data">
                      <h4>Deliver Result</h4>
                      <p>
                        We have the technology and industry expertise to develop
                        solutions that can connect people and businesses across
                        variety of mobile devices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="to_make">
        <div className="to_make_requests">
          <div className="container">
            <div className="to_make_requests_data">
              <div className="row to_make_requests_row">
                <div className="col-9 to_make_requests_col_9">
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
                <div className="col-3 to_make_requests_col_3">
                  <div className="to_make_requests_play">
                    <FontAwesomeIcon className="play_icon" icon={faPlay} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="happy_clients">
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
      <section className="testimonial">
        <div className="container">
          <div className="testimonial_top_data">
            <div className="testimonial_top_text">
              <h6>TESTIMONIAL</h6>
              <h2>What Says</h2>
              <h2>Our Happy Clients</h2>
              <div className="em_bar_bg"></div>
            </div>
          </div>
          <Testimonial_Carousel />
        </div>
      </section>
      <section className="get_quote">
        <div className="container">
          <div className="get_quote_top_data">
            <div className="get_quote_bottom_text">
              <h6>GET QUOTE</h6>
              <h2>Make An</h2>
              <h2>Free Consultant</h2>
              <div className="em_bar_bg"></div>
            </div>
          </div>
          <div className="get_quote_bottom_data">
            <div className="row get_quote_row">
              <div className="col-6 get_quote_col_6">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="col-6 get_quote_col_6">
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Email Address"
                  />
                </div>
              </div>
            </div>
            <div className="row get_quote_row">
              <div className="col-6 get_quote_col_6">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="col-6 get_quote_col_6">
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Website"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Write a Message"
                  rows={7}
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="get_quote_bottom_button">
              <button className="btn btn-light">Free Consultancy</button>
            </div>
          </div>
        </div>
      </section>
      <section className="latest_article">
        <div className="container">
          <div className="latest_article_top_data">
            <div className="row latest_article_top_row">
              <div className="col-9 latest_article_top_col_9">
                <div className="latest_article_top_text">
                  <h6>LATEST ARTICLE</h6>
                  <h2 className="see">See Our Latest</h2>
                  <h2>Blog Posts</h2>
                  <div className="em_bar_bg"></div>
                </div>
              </div>
              <div className="col-3 latest_article_top_col_3">
                <button className="btn btn-primary latest_article_button btn-lg">
                  See All Blogs
                </button>
              </div>
            </div>
          </div>
          <div className="latest_article_bottom_data">
            <div className="row latest_article_bottom_row">
              <div className="col-4 latest_article_bottom_col_4">
                <div className="card-data">
                  <div className="card">
                    <div className="card_img">
                      <img src={blog1} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                      <p className="card-text">Techno | January 3, 2023</p>
                      <h5 className="card-title">
                        The five devices you need to work anytime
                      </h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectet adipisie cing elit
                        sed eiusmod tempor incididunt on labore et dolore.
                      </p>
                      <p className="card-button">
                        Read More <FontAwesomeIcon icon={faArrowRightLong} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 latest_article_bottom_col_4">
                <div className="card-data">
                  <div className="card">
                    <div className="card_img">
                      <img src={blog2} className="card-img-top" alt="..." />
                    </div>

                    <div className="card-body">
                      <p className="card-text">Techno | January 3, 2023</p>
                      <h5 className="card-title">
                        How to learn PHP 10 tips to get you started
                      </h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectet adipisie cing elit
                        sed eiusmod tempor incididunt on labore et dolore.
                      </p>
                      <p className="card-button">
                        Read More <FontAwesomeIcon icon={faArrowRightLong} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 latest_article_bottom_col_4">
                <div className="card-data">
                  <div className="card">
                    <div className="card_img">
                      <img src={blog3} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                      <p className="card-text">Techno | Augost 5, 2023</p>
                      <h5 className="card-title">
                        The five devices you need to work anytime
                      </h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectet adipisie cing elit
                        sed eiusmod tempor incididunt on labore et dolore.
                      </p>
                      <p className="card-button">
                        Read More <FontAwesomeIcon icon={faArrowRightLong} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="subscribe_our_newsletter">
        <div className="container">
          <div className="subscribe_our_newsletter_data">
            <div className="subscribe_our_newsletter_title">
              <h2>Subscribe Our Newsletter</h2>
            </div>
            <div className="subscribe_our_newsletter_input">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter your Email"
                aria-label=".form-control-lg example"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
