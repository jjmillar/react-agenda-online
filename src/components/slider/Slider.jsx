import React from "react";

import { register } from "swiper/element/bundle";
register();
import "swiper/css/bundle";
import "./slider.scss";

import one from "../../assets/campaings/1.jpg";
import two from "../../assets/campaings/2.jpg";
import three from "../../assets/campaings/3.jpg";

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
    </swiper-container>
  );
};

export default Slider;
