import React from "react";
import Dataimg from "./assets/features.png";
import map from "./assets/map.png";
import AOS from "aos";

AOS.init({
  offset: 250,
});

function Feature() {
  return (
    <>
      <section id="feature">
        <h2>More Feature</h2>
        <div
          className="feature_background_img"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <img src={map} alt="" />
        </div>
        <div
          className="feature_img"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <img src={Dataimg} alt="" />
        </div>
      </section>
    </>
  );
}

export default Feature;
