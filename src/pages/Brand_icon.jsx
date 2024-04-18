import React from "react";
import Brand1 from "../IMG/1.png";
import Brand2 from "../IMG/2.png";
import Brand3 from "../IMG/3.png";
import Brand4 from "../IMG/4.png";
import Brand5 from "../IMG/5.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Brand_icon = () => {
  return (
    <div>
      <section className="about_one_brand_icon">
        <div className="container">
          <div className="about_one_brand_all_data">
            <OwlCarousel
              className="owl-theme"
              loop
              margin={0}
              nav
              items={5}
              autoplay
              autoplayTimeout={3000}
              responsive={{
                0: { items: 1, nav: false },
                768: { items: 3, nav: false },
                1024: { items: 5, nav: false },
              }}
            >
              <div className="item">
                <img src={Brand1} alt="_1" />
              </div>
              <div className="item">
                <img src={Brand2} alt="" />
              </div>
              <div className="item">
                <img src={Brand3} alt="_3" />
              </div>
              <div className="item">
                <img src={Brand4} alt="_4" />
              </div>
              <div className="item">
                <img src={Brand5} alt="" />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brand_icon;
