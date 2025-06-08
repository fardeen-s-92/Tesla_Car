import speed from "./assets/speed-.svg";
import charge from "./assets/charge.svg";
import boxline from "./assets/box-line.svg";
import "./App.css";

export default function Card({ h2, p, img, Price }) {
  return (
    <>
      <div className="card margin_bottom">
        <div className="Card_background_img"></div>
        <div className="card_head">
          <h2>{h2}</h2>
          <p>{p}</p>
        </div>
        <div className="card_img">
          <img src={img} alt="" />
        </div>
        <div className="card_km">
          <p>
            <img src={speed} alt="" /> 3.7Sec
          </p>
          <p>
            <img src={boxline} alt="" />
            356km/h
          </p>
          <p>
            <img src={charge} alt="" />
            Electric
          </p>
        </div>
        <h2 className="price">${Price}</h2>
      </div>
    </>
  );
}
