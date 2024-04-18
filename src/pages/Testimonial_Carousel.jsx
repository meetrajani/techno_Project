import React from 'react'
import testi3 from "../IMG/testi3.jpg";
import testi2 from "../IMG/testi2.jpg";
import testi1 from "../IMG/testi1.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Testimonial_Carousel = () => {
  return (
    <div>
      <div className="testimonial_bottom_data">
            <OwlCarousel
              className="owl-theme"
              loop
              margin={0}
              nav
              items={3}
              autoplay
              autoplayTimeout={4000}
              responsive={{
                0: { items: 1, nav: false },
                768: { items: 2, nav: false },
                1024: { items: 3, nav: false },
              }}
            >
              <div className="item">
                <div className="testimonial_bottom_data_all">
                  <div className="testimonial_bottom_data_all_p">
                    <div className="testimonial_bottom_data_text">
                      <p>
                        Dignissim per dis dignissim mi nibh a parturient
                        habitasse suspendisse ut a feugiat morbi neque don't is
                        tortor.Tellus volutpat scelerisque techno tempor.
                      </p>
                    </div>
                    <div className="testimonial_bottom_data_card">
                      <div className="testimonial_bottom_card_img">
                        <img src={testi3} alt="testi3" />
                      </div>
                      <div className="testimonial_bottom_card_text">
                        <h4>Abrham Khan</h4>
                        <p>IT Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial_bottom_data_all">
                  <div className="testimonial_bottom_data_all_p">
                    <div className="testimonial_bottom_data_text">
                      <p>
                        Dignissim per dis dignissim mi nibh a parturient
                        habitasse suspendisse ut a feugiat morbi neque don't is
                        tortor.Tellus volutpat scelerisque techno tempor.
                      </p>
                    </div>
                    <div className="testimonial_bottom_data_card">
                      <div className="testimonial_bottom_card_img">
                        <img src={testi2} alt="testi2" />
                      </div>
                      <div className="testimonial_bottom_card_text">
                        <h4>Clare Olsone</h4>
                        <p>Financial Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial_bottom_data_all">
                  <div className="testimonial_bottom_data_all_p">
                    <div className="testimonial_bottom_data_text">
                      <p>
                        Dignissim per dis dignissim mi nibh a parturient
                        habitasse suspendisse ut a feugiat morbi neque don't is
                        tortor.Tellus volutpat scelerisque techno tempor.
                      </p>
                    </div>
                    <div className="testimonial_bottom_data_card">
                      <div className="testimonial_bottom_card_img">
                        <img src={testi1} alt="testi1" />
                      </div>
                      <div className="testimonial_bottom_card_text">
                        <h4>Jamal Vuiyan</h4>
                        <p>Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial_bottom_data_all">
                <div className="testimonial_bottom_data_all_p">
                  <div className="testimonial_bottom_data_text">
                    <p>
                      Dignissim per dis dignissim mi nibh a parturient habitasse
                      suspendisse ut a feugiat morbi neque don't is
                      tortor.Tellus volutpat scelerisque techno tempor.
                    </p>
                  </div>
                  <div className="testimonial_bottom_data_card">
                    <div className="testimonial_bottom_card_img">
                      <img src={testi2} alt="testi2" />
                    </div>
                    <div className="testimonial_bottom_card_text">
                      <h4>Israt Jahan</h4>
                      <p>Developer</p>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
    </div>
  )
}

export default Testimonial_Carousel
