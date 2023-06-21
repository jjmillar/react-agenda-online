import React from "react";
import IMAGES from "./images";

import { register } from "swiper/element/bundle";
register();
import "swiper/css/bundle";
import "./slider.scss";

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
      {IMAGES.map((i) => (
        <swiper-slide class="swiper-slide" key={i.id}>
          <img src={i.image} alt="estetica girardi promo" />
        </swiper-slide>
      ))}
    </swiper-container>
  );
};

export default Slider;
