import {
  faFacebook,
  faLinkedin,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronRight,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import logo from "../IMG/logo.png";
import { Link } from "react-router-dom";

const Nevbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header>
        <div className="header-top">
          <div className="container">
            <div className="row header-top_row">
              <div className="col-8">
                <div className="header-top-data">
                  <div className="header-top-p">
                    <FontAwesomeIcon className="icon" icon={faEnvelope} />
                    <a href="#" >example@gmail.com</a>
                  </div>
                  <div className="header-top-p">
                    <FontAwesomeIcon className="icon" icon={faLocationDot} />
                    <a href="#">24/5, 1st Floor, Kurigram</a>
                  </div>
                  <div className="header-top-p">
                    <FontAwesomeIcon className="icon" icon={faPhone} />
                    <a href="#">+ (1800) 456 7890</a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="header-icons">
                  <div className="all-icons">
                    <a href="#">
                      <FontAwesomeIcon className="B_icon" icon={faFacebook} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon className="B_icon" icon={faTwitter} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon className="B_icon" icon={faPinterest} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon className="B_icon" icon={faLinkedin} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom-wrap">
          <div className="container">
            <div className={isScrolled ? "header scrolled" : "header"}>
              <div className="header-bottom">
                <nav className="navbar navbar-expand-lg">
                  <div className="container">
                    <Link to="/" className="navbar-brand">
                      <img src={logo} alt="logo" />
                    </Link>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="dropdo">
                          <a className="nav-link dropbt" href="#">
                            Home
                          </a>
                          <div className="dropdown sub_menu ">
                            <div className="dropdown-menu-all">
                              <div className="dropdown-manu">
                                <ul>
                                  <li>
                                    <Link to="/" className="dropdown-item">
                                      Home One
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Home Two
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Home Three
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Home Four
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Home Five
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Home Six
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Home Seven
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Home Eight
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Software Light & Dark
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="dropdown-manu">
                                <ul>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Home Nine
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Home Ten
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Home Eleven New
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Home Twelve New
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Home Thirteen New
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Data Science New
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Machine Learning New
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Affiliate Intelligent New
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Digital Agency Light & Dark
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="dropdown-manu">
                                <ul>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Odoo ERP
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Home It Solution
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Home Seo
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Home Insurance
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Home Startup
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Revulation Slider One
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Revulation Slider Two
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Dark Version New
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      RTL Version 01
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="dropdown-manu">
                                <ul>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Home Animation New
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Home Particle 01 <span>New</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Home Particle 02 <span>New</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Landing 01
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Landing 02
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Landing 03 <span>New</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Landing 04 <span>New</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Landing 05 <span>New</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      RTL Version 02 <span>New</span>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="dropdo">
                          <a className="nav-link dropbt" href="#">
                            Company
                          </a>
                          <div className="dropdown company sub_menu ">
                            <div className="dropdown-menu-all">
                              <div className="dropdown-manu">
                                <ul>
                                  <li>
                                    <Link
                                      to="/about_one"
                                      className="dropdown-item"
                                    >
                                      About One
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      About Two
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      About Three
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Our Team
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Team Details
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Whay Choose Us
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Case Study
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Case Study Details
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Portfolio
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Pricing
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      FAQ
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Error
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="dropdo">
                          <a className="nav-link dropbt" href="#">
                            Service
                          </a>
                          <div className="dropdown service sub_menu ">
                            <div className="dropdown-menu-all">
                              <div className="dropdown-manu">
                                <ul>
                                  <li>
                                    <Link
                                      to="/service"
                                      className="dropdown-item"
                                    >
                                      Service One
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Service Two
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Service Three
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Service Four
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Service Details
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="dropdo">
                          <a className="nav-link dropbt text-nowrap" href="#">
                            It Solution
                          </a>
                          <div className="dropdown service sub_menu">
                            <div className="dropdown-menu-all">
                              <div className="dropdown-manu">
                                <ul>
                                  <li>
                                    <Link
                                      to="/it_Solution"
                                      className="dropdown-item"
                                    >
                                      Managed IT Service
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/" className="dropdown-item">
                                      IT Service
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/" className="dropdown-item">
                                      Industries
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/" className="dropdown-item">
                                      Business Solution
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/" className="dropdown-item">
                                      Product Design
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/" className="dropdown-item">
                                      IT Service Details
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="dropdo">
                          <a className="nav-link dropbt" href="#">
                            Element
                          </a>
                          <div className="dropdown sub_menu ">
                            <div className="dropdown-menu-all">
                              <div className="dropdown-manu">
                                <ul>
                                  <li>
                                    <Link
                                      to="/Element"
                                      className="dropdown-item"
                                    >
                                      Service Box
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Info Box
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Teams
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Case Study
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="dropdown-manu">
                                <ul>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Process
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Testimonials
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Pricing
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Images Box
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="dropdown-manu">
                                <ul>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Counters
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Call Do Action
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Brands
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Accordion
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="dropdown-manu">
                                <ul>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      List
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Blogs
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="dropdo">
                          <a className="nav-link dropbt" href="#">
                            Blog
                          </a>
                          <div className="dropdown service sub_menu ">
                            <div className="dropdown-menu-all">
                              <div className="dropdown-manu">
                                <ul>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Blog Gird
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Blog List
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Blog Left Sidebar
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Blog Right Sidebar
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/blog_details"
                                      className="dropdown-item"
                                    >
                                      Blog Details
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="dropdo">
                          <a className="nav-link dropbt" href="#">
                            Contact
                          </a>
                          <div className="dropdown service sub_menu ">
                            <div className="dropdown-menu-all">
                              <div className="dropdown-manu">
                                <ul>
                                  <li>
                                    <Link
                                      to="/contact_us"
                                      className="dropdown-item"
                                    >
                                      Contact One
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Contact Two New
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Contact Three New
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Contact Four New
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Contact Five New
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/web_development"
                                      className="dropdown-item"
                                    >
                                      Contact Six New
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">
                          <button className="btn btn-primary btn-lg getbutton text-nowrap">
                            Get A Quote
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="header-mobile-bottom">
                <nav className="navbar bg-body-tertiary">
                  <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                      <img src={logo} alt="logo" />
                    </a>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasNavbar"
                      aria-controls="offcanvasNavbar"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div
                      className="offcanvas offcanvas-start"
                      tabIndex={-1}
                      id="offcanvasNavbar"
                      aria-labelledby="offcanvasNavbarLabel"
                    >
                      <div className="offcanvas-header">
                        <a className="navbar-brand" href="#">
                          <img src={logo} alt="logo" />
                        </a>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        />
                      </div>
                      <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                          <li className="nav-item ">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Home
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      Home One
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      Home Two
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link
                                      to="/"
                                      className="dropdown-item"
                                      href="#"
                                    >
                                      Home Three
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link
                                      to="/"
                                      className="dropdown-item"
                                      href="#"
                                    >
                                      Home Four
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      Home Five
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      Home Six
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      Home Seven
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      Home Eight
                                    </Link>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item ">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Company
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link
                                      to="/about_one"
                                      className="dropdown-item"
                                    >
                                      About One
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      About Two
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link
                                      to="/"
                                      className="dropdown-item"
                                      href="#"
                                    >
                                      About Three
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link
                                      to="/"
                                      className="dropdown-item"
                                      href="#"
                                    >
                                      Our Team
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      Team Details
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      Whay Choose Us
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      Case Study
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      Case Study Details
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      Portfolio
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      Pricing
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      FAQ
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      Error
                                    </Link>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item ">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Service
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link
                                      to="/service"
                                      className="dropdown-item"
                                    >
                                      Service One
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      Service Two
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link
                                      to="/"
                                      className="dropdown-item"
                                      href="#"
                                    >
                                      Service Three
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link
                                      to="/"
                                      className="dropdown-item"
                                      href="#"
                                    >
                                      Service Four
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      Service Details
                                    </Link>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item ">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              It Solution
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link
                                      to="/it_Solution"
                                      className="dropdown-item"
                                    >
                                      Managed IT Service
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      IT Service
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link
                                      to="/"
                                      className="dropdown-item"
                                      href="#"
                                    >
                                      Industries
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link
                                      to="/"
                                      className="dropdown-item"
                                      href="#"
                                    >
                                      Business Solution
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      Product Design
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      IT Service Details
                                    </Link>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item ">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Element
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link
                                      to="/Element"
                                      className="dropdown-item"
                                    >
                                      Service Box
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      Info Box
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link
                                      to="/"
                                      className="dropdown-item"
                                      href="#"
                                    >
                                      Teams
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link
                                      to="/"
                                      className="dropdown-item"
                                      href="#"
                                    >
                                      Case Study
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      Process
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      Testimonials
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      Pricing
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      Images Box
                                    </Link>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item ">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Blog
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      Blog Gird
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      Blog List
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link
                                      to="/"
                                      className="dropdown-item"
                                      href="#"
                                    >
                                      Blog Left Sidebar
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link
                                      to="/"
                                      className="dropdown-item"
                                      href="#"
                                    >
                                      Blog Right Sidebar
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link
                                      to="/blog_details"
                                      className="dropdown-item"
                                    >
                                      Blog Details
                                    </Link>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item ">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Contact
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link
                                      to="/contact_us"
                                      className="dropdown-item"
                                    >
                                      Contact One
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      Contact Two New
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link
                                      to="/"
                                      className="dropdown-item"
                                      href="#"
                                    >
                                      Contact Three New
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link
                                      to="/"
                                      className="dropdown-item"
                                      href="#"
                                    >
                                      Contact Four New
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      Contact Five New
                                    </Link>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row">
                                  <div className="col-2">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </div>
                                  <div className="col-10">
                                    <Link to="/" className="dropdown-item">
                                      Contact Six New
                                    </Link>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nevbar;
