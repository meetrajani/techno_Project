import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Provide_best from "./Provide_best";
import Clients_says from "./Clients_says";
import Brand_icon from "./Brand_icon";

const It_Solution = () => {
  return (
    <div>
      <section className="about_one">
        <div className="about_data">
          <div className="container">
            <div className="about_text">
              <h1>Managed IT Services</h1>
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
      <Provide_best />
      <section className="It_S_happy_clients">
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
      <Clients_says/>
      <Brand_icon/>
    </div>
  );
};

export default It_Solution;
