import React from "react";
import logo from "./assets/logo.svg";
import facbook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";
import twitter from "./assets/twitter.svg";
import copyright from "./assets/copyright.svg";
// import footer_shape from "./assets/footer_shape.png";
// import footer_shape_right from "./assets/footer_shape.right.png";

import AOS from "aos";

AOS.init({
  offset: 250,
});
function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="footer_sec" data-aos="fade-up">
          <div className="footer_contant_first">
            <div className="logo">
              <img src={logo} alt="" />
              <h3>Elecar</h3>
            </div>
            <p>
              We offer the best electric cars of the most recognized brands in
              the world.
            </p>
          </div>
          <div className="footer_contant">
            <h3>Company</h3>
            <p>About</p>
            <p>Cars</p>
            <p>History</p>
            <p>Shop</p>
          </div>
          <div className="footer_contant">
            <h3>Information</h3>
            <p>Request a quote</p>
            <p>Find a dealer</p>
            <p>Contact us</p>
            <p>Services</p>
          </div>
          <div className="footer_icons">
            <h3>follow Us</h3>
            <div className="footer_logo">
              <img src={facbook} alt="" />
              <img src={instagram} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
        <div className="copy_right">
          <p>
            <img src={copyright} alt="" /> Bedimcode. All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
