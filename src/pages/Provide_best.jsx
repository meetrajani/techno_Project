import React from "react";
import about_2 from "../IMG/about-2.jpg";

const Provide_best = () => {
  return (
    <div>
      <section className="Provide-Best">
        <div className="container">
          <div className="row provide-best-row">
            <div className="col-6 provide-best-col-6">
              <div className="provide-img">
                <img src={about_2} alt="" />
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
                  <div className="em_bar_bg"></div>
                  <div className="About_provide_best_top_text">
                    <p>
                      Voice and Data Systems are crucial to the success or
                      failure of most businesses. any companies provide laptops,
                      cell phones.
                    </p>
                  </div>
                </div>
                <div className="provide-bottom-data">
                  <div className="row">
                    <div className="col-12">
                      <div className="About_provide_best">
                        <p>
                          The standard chunk of Lorem Ipsum used since the 1500s
                          is and reproduced below for those interested. Sections
                          1.10.32 and also 1.10.33 from “de Finibus Bonorum et
                          Malorum" by Cicero are alse reproduced in their exact
                          original form, accompanied
                        </p>
                        <p>
                          The standard chunk of Lorem Ipsum used since the 1500s
                          is and reproduced below for those interested
                        </p>
                      </div>
                      <div className="About_provide_best_button">
                        <button className="btn btn-primary btn-lg best_button">
                          More Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Provide_best;
