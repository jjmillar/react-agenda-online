import React from "react";

import { register } from "swiper/element/bundle";
register();
import "swiper/css/bundle";
import "./slider.scss";

import five from "../../assets/campaings/5.jpg";
import six from "../../assets/campaings/6.jpg";
import seven from "../../assets/campaings/7.jpg";

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
        <img src={five} alt="estetiga girardi promo" />
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <img src={six} alt="estetiga girardi promo" />
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <img src={seven} alt="estetiga girardi promo" />
      </swiper-slide>
    </swiper-container>
  );
};

export default Slider;