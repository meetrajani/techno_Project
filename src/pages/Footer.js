import React from "react";
import logo_2 from "../IMG/logo_2.png";
import recent1 from "../IMG/recent1.jpg";
import recent3 from "../IMG/recent3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faSkype,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row footer_top_row">
          <div className="col-3 footer_top_col_3">
            <div className="footer_sd_1_data">
              <div className="footer_sd_1_img">
                <img src={logo_2} alt="logo" />
              </div>
              <div className="footer_sd_1_data">
                <p>
                  Condimentum rhoncus, sem quam semper libero, sit amet
                  adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
                  luctus.
                </p>
              </div>
              <div className="footer_sd_1_icons">
                <div className="footer_sd_1_icons_text">
                  <samp>Follow Us</samp>
                </div>
                <div className="footer_sd_1_icon">
                  <a href="#">
                    <FontAwesomeIcon
                      className="footer_sd_1_icon_"
                      icon={faFacebookF}
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      className="footer_sd_1_icon_"
                      icon={faTwitter}
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      className="footer_sd_1_icon_"
                      icon={faLinkedinIn}
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      className="footer_sd_1_icon_"
                      icon={faSkype}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 footer_top_col_3">
            <div className="footer_sd_2_data">
              <div className="footer_sd_2_title">
                <h4>Our Services</h4>
              </div>
              <div className="footer_sd_2_data">
                <div className="footer_sd_2_text">
                  <ul>
                    <li>
                      <a href="#">Marketing Strategy</a>
                    </li>
                    <li>
                      <a href="#">Interior Design</a>
                    </li>
                    <li>
                      <a href="#">Digital Services</a>
                    </li>
                    <li>
                      <a href="#">Product Selling</a>
                    </li>
                    <li>
                      <a href="#">Product Design</a>
                    </li>
                    <li>
                      <a href="#">Social Marketing</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 footer_top_col_3">
            <div className="footer_sd_3_data">
              <div className="footer_sd_3_title">
                <h4>Company Address</h4>
              </div>
              <div className="footer_sd_3_data">
                <div className="footer_sd_3_text">
                  <ul>
                    <li>
                      <p>
                        Porem awesome dolor sitework amet, consetur acing elit,
                        sed do eiusmod ligal
                      </p>
                    </li>
                    <li>
                      <p>
                        Address :54/1 New dhas sorini Asut, Melbord Austria.
                      </p>
                    </li>
                    <li>
                      <p>Phone :54786547521</p>
                    </li>
                    <li>
                      <p>Email :demo@example.com</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 footer_top_col_3">
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
                  <a href="#">Tiktok Illegally collecting data sharing</a>
                  <p>December 12, 2023</p>
                </div>
              </div>
              <div className="footer_sd_4_bottom_data">
                <div className="footer_sd_4_img">
                  <a href="#">
                    <img src={recent3} alt="recent1" />
                  </a>
                </div>
                <div className="footer_sd_4_text">
                  <a href="#">How can use our latest news by</a>
                  <p>December 12, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer_bottom_row">
          <div className="col-6 footer_bottom_col_6_1">
            <p>© 2023 Techno.All Rights Reserved.</p>
          </div>
          <div className="col-6 footer_bottom_col_6_2">
            <a href="#">Privacy Policy</a>
            <a href="#">/</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
