import React from "react";

import { register } from "swiper/element/bundle";
register();
import "swiper/css/bundle";
import "./slider.scss";

import one from "../../assets/campaings/101.svg";
import two from "../../assets/campaings/104.svg";
import three from "../../assets/campaings/106.svg";
import four from "../../assets/campaings/107.svg";
import five from "../../assets/campaings/108.svg";
import six from "../../assets/campaings/109.svg";

const Slider = () => {
  return (
    <swiper-container
      class="swiper-container"
      pagination="true"
      pagination-clickable="true"
      navigation="true"
      space-between="30"
      centered-slides="true"
      autoplay-delay="3500"
      css-mode="true"
    >
      <swiper-slide class="swiper-slide">
        <img src={one} alt="estetiga girardi promo" />
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <img src={two} alt="estetiga girardi promo" />
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <img src={three} alt="estetiga girardi promo" />
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <img src={four} alt="estetiga girardi promo" />
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <img src={five} alt="estetiga girardi promo" />
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <img src={six} alt="estetiga girardi promo" />
      </swiper-slide>
    </swiper-container>
  );
};

export default Slider;
