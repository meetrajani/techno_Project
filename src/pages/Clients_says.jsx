import React from "react";
import _1our from "../IMG/1our.jpg";
import _2our from "../IMG/2our.jpg";
import _3our from "../IMG/3our.jpg";
import _4our from "../IMG/4our.jpg";
import _5our from "../IMG/5our.jpg";
import _6our from "../IMG/6our.jpg";
import _7our from "../IMG/7our.jpg";
import _8our from "../IMG/8our.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Clients_says = () => {
  return (
    <div>
      <section className="clients_says">
        <div className="container">
          <div className="clients_says_top_data">
            <div className="clients_says_data">
              <p>TESTIMONIAL</p>
              <h2>
                Our Happy <samp>Clients Says</samp>
              </h2>
              <div className="em_bar_bg"></div>
            </div>
          </div>
          <div className="clients_says_bottom_data">
            <OwlCarousel
              className="owl-theme"
              loop
              margin={0}
              nav
              items={1}
              autoplay
              autoplayTimeout={3500}
              responsive={{
                0: { items: 1, nav: false },
                768: { items: 1, nav: false },
                1024: { items: 1, nav: false },
              }}
            >
              <div className="item">
                <div className="clients_says_bottom_data">
                  <div className="clients_says_bottom_all_data">
                    <p>
                      Managing everyday banking has finally become fun, fast and
                      easy. Icing on the cake, customer support is super
                      reactive: 5 stars!
                    </p>
                    <div class="says_bottom_all_data_img">
                      <div class="pp">
                        <img src={_1our} alt="" />
                      </div>
                      <div className="">
                        <div class="name">Tom Abel De</div>
                        <div class="job">Digital Marketing</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="clients_says_bottom_data">
                  <div className="clients_says_bottom_all_data">
                    <p>
                      Qonto met my needs straight away. ng has finally become
                      fun, fast andCustomer care is awesome! Period.
                    </p>
                    <div class="says_bottom_all_data_img">
                      <div class="pp">
                        <img src={_2our} alt="" />
                      </div>
                      <div className="">
                        <div class="name">Sanuka Santa</div>
                        <div class="job">To To Company</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="clients_says_bottom_data">
                  <div className="clients_says_bottom_all_data">
                    <p>
                      With Qonto, I've been able to order MasterCard cards in
                      seconds. My purchasing team can now be autonomous with
                      their payments. Qonto is game changer.
                    </p>
                    <div class="says_bottom_all_data_img">
                      <div class="pp">
                        <img src={_3our} alt="" />
                      </div>
                      <div className="">
                        <div class="name">Grégoire Pasquet</div>
                        <div class="job">Solf Solution</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="clients_says_bottom_data">
                  <div className="clients_says_bottom_all_data">
                    <p>
                      Qonto? Easy, fast, efficient. Traditionalng has finally
                      become fun, fast and banks' hassles belong to the past!
                    </p>
                    <div class="says_bottom_all_data_img">
                      <div class="pp">
                        <img src={_4our} alt="" />
                      </div>
                      <div className="">
                        <div class="name">Nicolas Puran</div>
                        <div class="job">CEO Founder</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="clients_says_bottom_data">
                  <div className="clients_says_bottom_all_data">
                    <p>
                      Qonto? A flawless UX and a customer service ng has finally
                      become fun, fast and that cares so much. This is just
                      incredible!
                    </p>
                    <div class="says_bottom_all_data_img">
                      <div class="pp">
                        <img src={_5our} alt="" />
                      </div>
                      <div className="">
                        <div class="name">Mathieu Jouhet</div>
                        <div class="job">Freelance @Hello Mat</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="clients_says_bottom_data">
                  <div className="clients_says_bottom_all_data">
                    <p>
                      I needed a bank similar to a SaaS for LiveMentor: ng has
                      finally become fun, fast and I think I found it.
                    </p>
                    <div class="says_bottom_all_data_img">
                      <div class="pp">
                        <img src={_6our} alt="" />
                      </div>
                      <div className="">
                        <div class="name">Charles Jadran</div>
                        <div class="job">Web Development</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="clients_says_bottom_data">
                  <div className="clients_says_bottom_all_data">
                    <p>
                      I can say 'Goodbye' to the banking pains I had to ng has
                      finally become fun, fast and bear with, and 'hello' to a
                      way to do finance that makes sense.
                    </p>
                    <div class="says_bottom_all_data_img">
                      <div class="pp">
                        <img src={_7our} alt="" />
                      </div>
                      <div className="">
                        <div class="name">Digong Frando</div>
                        <div class="job">CEO Officience</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="clients_says_bottom_data">
                  <div className="clients_says_bottom_all_data">
                    <p>
                      Qonto is 100% in tune with what we do at Alan.eu: a
                      user-friendly service, a user-centric interface and a very
                      reactive customer support.
                    </p>
                    <div class="says_bottom_all_data_img">
                      <div class="pp">
                        <img src={_8our} alt="" />
                      </div>
                      <div className="">
                        <div class="name">Charles Samuelian</div>
                        <div class="job">Director & Photo Man</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients_says;
