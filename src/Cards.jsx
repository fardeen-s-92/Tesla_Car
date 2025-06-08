import React from "react";

import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Card from "./Card";
import car from "./assets/car.png";
import car2 from "./assets/car2.png";
import car3 from "./assets/car3.png";

import "./App.css";

function Cards() {
  return (
    <>
      <div className="card_heading">
        <h2>Choose Your Electric Car </h2>
        <h2>Of The Porsche Brand</h2>
      </div>
      <Swiper
        id="Card"
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={0}
        breakpoints={{
          600: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Card h2={"Porsche"} p={"Turbo S"} Price={"175, 900"} img={car} />
        </SwiperSlide>
        <SwiperSlide>
          <Card h2={"Porsche"} p={"Taycan"} Price={"114, 900"} img={car2} />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            h2={"Porsche"}
            p={"Turbo S Cross"}
            Price={"180, 900"}
            img={car3}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card h2={"Porsche"} p={"Turbo S"} Price={"175, 900"} img={car} />
        </SwiperSlide>
        <SwiperSlide>
          <Card h2={"Porsche"} p={"Turbo S"} Price={"175, 900"} img={car2} />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            h2={"Porsche"}
            p={"Turbo S Cross"}
            Price={"180, 900"}
            img={car3}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card h2={"Porsche"} p={"Turbo S"} Price={"175, 900"} img={car} />
        </SwiperSlide>
        <SwiperSlide>
          <Card h2={"Porsche"} p={"Turbo S"} Price={"175, 900"} img={car2} />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            h2={"Porsche"}
            p={"Turbo S Cross"}
            Price={"180, 900"}
            img={car3}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Cards;
