import React from "react";
import img from "./assets/offer.png";
import AOS from "aos";

AOS.init({
  offset: 300,
  duration: 2000,
});

function Offer() {
  return (
    <>
      <section id="offer">
        <div className="offer_sec">
          <div className="offer_contant" data-aos="fade-right">
            <h2>Do You Want To Receive</h2>
            <h2> Special Offers?</h2>
            <p className="sub_para">
              Be the first to receive all the information about our products and
              new cars by email by subscribing to our mailing list.
            </p>
            <a className="all_btn" href="#">
              Subscribe Now
            </a>
          </div>
          <div className="offer_img" data-aos="fade-left">
            <img src={img} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Offer;
