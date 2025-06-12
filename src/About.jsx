import React from "react";
import "./App.css";
import img from "./assets/about1.png";
import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init({
  offset: 250,
});

function About() {
  return (
    <>
      <section id="about">
        <div className="about_sec">
          <div className="about_img" data-aos="fade-right">
            <img src={img} alt="img" />
          </div>
          <div className="about_contant" data-aos="fade-left">
            <h2>Machines With </h2>
            <h2>Future Technology</h2>
            <p className="sub_para">
              See the future with high-performance electric cars produced by
              renowned brands. They feature futuristic builds and designs with
              new and innovative platforms that last a long time.
            </p>
            <div className="about_btn">
              <a className="all_btn" href="#">
                Know More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
