import React from "react";
import Second_card from "./Second_card";
import img1 from "./assets/second_card1.png";
import img2 from "./assets/second_card2.png";
import img3 from "./assets/second_card3.png";
import img4 from "./assets/second_card4.png";
import img5 from "./assets/second_card5.png";
import icon1 from "./assets/second_card_icon1.png";
import icon2 from "./assets/second_card_icon2.png";
import icon3 from "./assets/second_card_icon3.png";

function Second_cards() {
  return (
    <>
      <div className="second_card_heading">
        <h2>Featured Luxury Cars</h2>
      </div>
      <div className="second_icons">
        <div className="second_icon">
          <p>All</p>
        </div>
        <div className="second_icon">
          <img src={icon1} alt="icon" />
        </div>
        <div className="second_icon ">
          <img id="aoudi" src={icon2} alt="icon" />
        </div>
        <div className="second_icon ">
          <img src={icon3} alt="icon" />
        </div>
      </div>
      <div className="second_cards">
        <Second_card h2={"Tesla"} p={"Model X"} img={img1} Price={"98,920"} />
        <Second_card h2={"Tesla"} p={"Model 3"} img={img2} Price={"45,999"} />
        <Second_card h2={"Tesla"} p={"E-tron"} img={img3} Price={"175,990"} />
        <Second_card
          h2={"Tesla"}
          p={"Boxster 987"}
          img={img4}
          Price={"126,950"}
        />
      </div>
      <div className="second_cards">
        <Second_card h2={"Tesla"} p={"E-tron"} img={img3} Price={"175,990"} />
        <Second_card h2={"Tesla"} p={"Model X"} img={img1} Price={"98,920"} />
        <Second_card h2={"Tesla"} p={"Panamera"} img={img5} Price={"126,900"} />
        <Second_card h2={"Tesla"} p={"Model 3"} img={img2} Price={"45,999"} />
      </div>
    </>
  );
}

export default Second_cards;
