import "./App.css";
import AOS from "aos";
import VanillaTilt from "vanilla-tilt";

AOS.init({
  offset: 200,
  duration: 1000,
});

export default function Card({ h2, p, img, Price }) {
  return (
    <>
      <div className="card second_card" data-aos="fade-up">
        <div className="Card_background_img second_card_img"></div>
        <div className="card_head">
          <h2>{h2}</h2>
          <p>{p}</p>
        </div>
        <div className="card_img second_img ">
          <img src={img} alt="" />
        </div>
        <h2 className="price second_price">${Price}</h2>
      </div>
    </>
  );
}
