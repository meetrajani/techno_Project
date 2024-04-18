import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faCalendarDays,
  faChevronRight,
  faComments,
  faMagnifyingGlass,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import blog3 from "../IMG/blog3.jpg";
import blog2 from "../IMG/blog2.jpg";
import blog1 from "../IMG/blog1.jpg";
import testi2_2 from "../IMG/testi2.png";
import recent1 from "../IMG/recent1.jpg";
import recent2 from "../IMG/recent2.jpg";
import recent3 from "../IMG/recent3.jpg";
import recent4 from "../IMG/recent4.jpg";
import recent5 from "../IMG/recent5.jpg";
import recent6 from "../IMG/recent6.jpg";
import blg_dtl_sd from "../IMG/blg-dtl-sd.jpg";
import {
  faBehance,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faPinterest,
  faReddit,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Blog_details = () => {
  return (
    <div>
      <section className="about_one">
        <div className="about_data">
          <div className="container">
            <div className="about_text">
              <h1>Blog Details</h1>
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
      <section className="all_section">
        <div className="container">
          <div className="row all_section_row">
            <div className="col-8 all_section_col_8">
              <section className="business_contents">
                <div className="business_contents_top_img">
                  <img src={blog3} alt="blog3" />
                </div>
                <div className="business_contents_bottom_data">
                  <div className="business_contents_bottom_text">
                    <div className="business_contents_bottom_text_button">
                      <button class="btn btn-primary btn-sm" type="submit">
                        Business
                      </button>
                    </div>
                    <div className="business_all_data">
                      <div className="business_all_text">
                        <h2>
                          Business contents insurance is a type of business
                          insurance that can protect
                        </h2>
                        <div className="date_icons">
                          <div className="date">
                            <FontAwesomeIcon
                              className="icons_data"
                              icon={faCalendarDays}
                            />
                            <samp>10 Mar 2023</samp>
                          </div>
                          <div className="comment">
                            <FontAwesomeIcon
                              className="icons_data"
                              icon={faComments}
                            />
                            <samp>20 Comments</samp>
                          </div>
                          <div className="link">
                            <FontAwesomeIcon
                              className="icons_data"
                              icon={faThumbsUp}
                            />
                            <samp>39 Link</samp>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet consectet adipisie cing
                          elit sed eiusmod tempor incididunt on labore et
                          dolore. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo.
                        </p>
                        <p>
                          Bccaecat cupidatat non proident, sunt in culpa qui
                          officia deserunt mollit anim id est there laborum. Sed
                          ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium ware doloremque laudantium,
                          totam rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia on voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos query ratione
                          voluptatem sequi nesciunt. Neque porro quisquam
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor dolor an incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud there exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Duis
                          aute irure poor dolor in reprehenderit in voluptate
                          velit esse cillum
                        </p>
                      </div>
                      <div className="business_all_img_2">
                        <img src={blog2} alt="" />
                      </div>
                      <div className="business_all_text">
                        <h3>A cleansing hot shower or bath</h3>
                        <p>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical on
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin professor at thes
                          Hampden-Sydney College in Virginia, looked up one of
                          the more obscure Latin words, consectetur, from a
                          Lorem Ipsum passage, and going through the cites
                        </p>
                        <blockquote>
                          Richard McClintock, a Latin professor at thes
                          Hampden-Sydney College in Virginia, looked up one of
                          the more obscure Latin words, consectetur, from a
                          Lorem Ipsum passage, and going through the cites dorem
                          awesme loren very creative
                          <p className="signatures">
                            <span>Mr. Aleck Jonder</span>
                          </p>
                        </blockquote>
                        <h3>Setting the mood with incense</h3>
                        <p>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical on
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin professor at thes
                          Hampden-Sydney College in Virginia, looked up one of
                          the more obscure Latin words, consectetur, from a
                          Lorem Ipsum passage, and going through the cites
                        </p>
                        <div className="icons_all">
                          <div className="box_icons">
                            <FontAwesomeIcon icon={faFacebookF} />
                          </div>
                          <div className="box_icons">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                          </div>
                          <div className="box_icons">
                            <FontAwesomeIcon icon={faTwitter} />
                          </div>
                          <div className="box_icons">
                            <FontAwesomeIcon icon={faInstagram} />
                          </div>
                          <div className="box_icons">
                            <FontAwesomeIcon icon={faPinterest} />
                          </div>
                          <div className="box_icons">
                            <FontAwesomeIcon icon={faReddit} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="business_contents_crad">
                  <h4>Recent Post</h4>
                  <div className="row">
                    <div className="col-6 latest_article_bottom_col_4">
                      <div className="card-data">
                        <div className="card">
                          <img src={blog1} className="card-img-top" alt="..." />
                          <div className="card-body">
                            <p className="card-text">
                              Techno | January 3, 2023
                            </p>
                            <h5 className="card-title">
                              The five devices you need to work anytime
                            </h5>
                            <p className="card-text">
                              Lorem ipsum dolor sit amet consectet adipisie cing
                              elit sed eiusmod tempor incididunt on labore et
                              dolore.
                            </p>
                            <p className="card-button">
                              Read More{" "}
                              <FontAwesomeIcon icon={faArrowRightLong} />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 latest_article_bottom_col_4">
                      <div className="card-data">
                        <div className="card">
                          <img src={blog2} className="card-img-top" alt="..." />
                          <div className="card-body">
                            <p className="card-text">
                              Techno | January 3, 2023
                            </p>
                            <h5 className="card-title">
                              How to learn PHP 10 tips to get you started
                            </h5>
                            <p className="card-text">
                              Lorem ipsum dolor sit amet consectet adipisie cing
                              elit sed eiusmod tempor incididunt on labore et
                              dolore.
                            </p>
                            <p className="card-button">
                              Read More{" "}
                              <FontAwesomeIcon icon={faArrowRightLong} />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="business_contents_input">
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
              </section>
            </div>
            <div className="col-4 all_section_col_4">
              <div className="blog_about_me">
                <div className="blog_about_me_saechabar">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                  <div className="Sercing">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </div>
                </div>
                <div className="blog_about_me_in">
                  <h4>About Me</h4>
                  <div className="blog_about_me_in_img">
                    <img src={testi2_2} alt="testi2_2" />
                  </div>
                  <div className="blog_about_me_in_data">
                    <h4>Hossain Khan</h4>
                    <p>
                      Lorem ipsum dolor sit amet site, compnay business elit,
                      sed do tempor incididunt ut labore thats is great.
                    </p>
                  </div>
                  <div className="blog_about_me_in_icons">
                    <FontAwesomeIcon className="icons" icon={faFacebookF} />
                    <FontAwesomeIcon className="icons" icon={faTwitter} />
                    <FontAwesomeIcon className="icons" icon={faInstagram} />
                    <FontAwesomeIcon className="icons" icon={faBehance} />
                    <FontAwesomeIcon className="icons" icon={faYoutube} />
                  </div>
                </div>
                <div className="blog_about_list">
                  <h4>Categories</h4>
                  <div className="blog_about_list_al">
                    <div className="blog_about_list_al_p">
                      <FontAwesomeIcon className="icons" icon={faYoutube} />
                      <p> Graphic Design</p>
                    </div>

                    <p className="number"> (25)</p>
                  </div>
                  <div className="blog_about_list_al">
                    <div className="blog_about_list_al_p">
                      <FontAwesomeIcon className="icons" icon={faYoutube} />
                      <p> Corporate building</p>
                    </div>

                    <p className="number"> (25)</p>
                  </div>
                  <div className="blog_about_list_al">
                    <div className="blog_about_list_al_p">
                      <FontAwesomeIcon className="icons" icon={faYoutube} />
                      <p> Web Design</p>
                    </div>

                    <p className="number"> (25)</p>
                  </div>
                  <div className="blog_about_list_al">
                    <div className="blog_about_list_al_p">
                      <FontAwesomeIcon className="icons" icon={faYoutube} />
                      <p> Corporate Office</p>
                    </div>

                    <p className="number"> (25)</p>
                  </div>
                  <div className="blog_about_list_al">
                    <div className="blog_about_list_al_p">
                      <FontAwesomeIcon className="icons" icon={faYoutube} />
                      <p> Road Map</p>
                    </div>

                    <p className="number"> (25)</p>
                  </div>
                </div>
                <div className="blog_about_post">
                  <div className="blog_about_post_data">
                    <div className="footer_sd_4_top_data">
                      <div className="footer_sd_4_title">
                        <h4>Popular Post</h4>
                      </div>
                      <div className="footer_sd_4_bottom_data_1">
                        <div className="footer_sd_4_img">
                          <a href="#">
                            <img src={recent1} alt="recent1" />
                          </a>
                        </div>
                        <div className="footer_sd_4_text">
                          <a href="#">3 Ways to Transform Your Blog Into</a>
                          <p>October 16, 2023</p>
                        </div>
                      </div>
                      <div className="footer_sd_4_bottom_data_1">
                        <div className="footer_sd_4_img">
                          <a href="#">
                            <img src={recent2} alt="recent1" />
                          </a>
                        </div>
                        <div className="footer_sd_4_text">
                          <a href="#">How Important Is Design To Business.</a>
                          <p>October 16, 2023</p>
                        </div>
                      </div>
                      <div className="footer_sd_4_bottom_data_1">
                        <div className="footer_sd_4_img">
                          <a href="#">
                            <img src={recent3} alt="recent1" />
                          </a>
                        </div>
                        <div className="footer_sd_4_text">
                          <a href="#">
                            Your Small Business Web Design Solution.
                          </a>
                          <p>October 16, 2023</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog_about_archives">
                  <div className="blog_about_archives_title">
                    <h4>Archives</h4>
                  </div>
                  <div className="blog_about_archives_data">
                    <div className="row">
                      <div className="col-3 blog_about_archives_data_col-3">
                        <button class="btn btn-secondary btn-sm">Event</button>
                      </div>
                      <div className="col-3 blog_about_archives_data_col-3">
                        <button class="btn btn-secondary btn-sm">Food</button>
                      </div>
                      <div className="col-3 blog_about_archives_data_col-3">
                        <button class="btn btn-secondary btn-sm">Water</button>
                      </div>
                      <div className="col-3 blog_about_archives_data_col-3">
                        <button class="btn btn-secondary btn-sm">Glass</button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4 blog_about_archives_data_col-4">
                        <button class="btn btn-secondary btn-sm">
                          Ciramic
                        </button>
                      </div>
                      <div className="col-4 blog_about_archives_data_col-4">
                        <button class="btn btn-secondary btn-sm">
                          Plastic
                        </button>
                      </div>
                      <div className="col-4 blog_about_archives_data_col-4">
                        <button class="btn btn-secondary btn-sm">Polite</button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6 blog_about_archives_data_col-6">
                        <button class="btn btn-secondary btn-sm">Modern</button>
                      </div>
                      <div className="col-6 blog_about_archives_data_col-6">
                        <button class="btn btn-secondary btn-sm">
                          Compaign
                        </button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 blog_about_archives_data_col-12">
                        <button class="btn btn-secondary btn-sm">
                          Government
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog_about_instagram">
                  <div className="blog_about_instagram_title">
                    <h3>Instagram</h3>
                  </div>
                  <div className="blog_about_instagram_data">
                    <div className="container text-center">
                      <div className="row">
                        <div className="col-4"><img src={recent1} alt="recent1" /></div>
                        <div className="col-4"><img src={recent2} alt="" /></div>
                        <div className="col-4"><img src={recent3} alt="" /></div>
                        <div className="col-4"><img src={recent4} alt="" /></div>
                        <div className="col-4"><img src={recent5} alt="" /></div>
                        <div className="col-4"><img src={recent6} alt="" /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog_about_need">
                  <img src={blg_dtl_sd} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog_details;
