import React from "react";
import hero1 from "./assets/hero1.svg";
import heroimg from "./assets/heroimg.png";
import km1 from "./assets/km1.svg";
import km2 from "./assets/km2.svg";
import shape_big from "./assets/shape big.svg";
import shape_small from "./assets/shape small.svg";
import About from "./About";
import Cards from "./Cards";
import Feature from "./Feature";
import Second_cards from "./Second_cards";
import Offer from "./Offer";
import Logos from "./Logos";
import Footer from "./Footer";
import AOS from "aos";

AOS.init({
  offset: 250,
});
function Hero() {
  return (
    <>
      <section id="hero">
        <div className="shape_big">
          <img src={shape_big} alt="" />
        </div>
        <div className="hero_sec">
          <div className="hero_contant">
            <h1 data-aos="fade-down" data-aos-duration="500">
              Choose The Best Car
            </h1>
            <h2
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              Porsche Mission E
            </h2>
            <p
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-delay="700"
            >
              <img src={hero1} alt="icon" /> Electric car
            </p>
          </div>
          <div
            className="hero_img"
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay="1000"
          >
            <img src={heroimg} alt="heroimg" />
            <div className="hero_km">
              <div className="km">
                <div className="logo2">
                  <img src={km2} alt="icon" />
                </div>
                <div className="logo_contant">
                  <h2>
                    24 <sup>o</sup>
                  </h2>
                  <p>TEMPERATURE</p>
                </div>
              </div>
              <div className="km">
                <div className="logo2">
                  <p>Km</p>
                </div>
                <div className="logo_contant">
                  <h2>873</h2>
                  <p>MILEAGE</p>
                </div>
              </div>
              <div className="km">
                <div className="logo2">
                  <img src={km1} alt="icon" />
                </div>
                <div className="logo_contant">
                  <h2>94%</h2>
                  <p>BATTERY</p>
                </div>
              </div>
            </div>
            <div className="start_btn">
              <p className="innerline">START</p>
            </div>
          </div>
        </div>
        <div className="shape_small">
          <img src={shape_small} alt="" />
        </div>
      </section>
      <About />
      <Cards />
      <Feature />
      <Second_cards />
      <Offer />
      <Logos />

      <Footer />
    </>
  );
}

export default Hero;
