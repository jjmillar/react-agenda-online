import React from "react";

import { register } from 'swiper/element/bundle';
register();
import 'swiper/css/bundle';
import './slider.scss'

const Slider = () => {
  return (
    <swiper-container
      class="swiper-container"
      pagination="true"
      pagination-clickable="true"
      navigation="true"
      space-between="30"
      centered-slides="true"
      autoplay-delay="2500"
      autoplay-disable-on-interaction="false"
    >
      <swiper-slide class="swiper-slide">
        <img
          src="https://tinypic.host/images/2023/03/06/128460446e8974454.jpg"
          alt="128460446e8974454.jpg"
          border="0"
        />
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <img
          src="https://tinypic.host/images/2023/03/06/2.jpg"
          alt="2.jpg"
          border="0"
        />
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <img
          src="https://tinypic.host/images/2023/03/06/Imagen-de-WhatsApp-2023-03-03-a-las-19.55.09.jpg"
          alt="Imagen-de-WhatsApp-2023-03-03-a-las-19.55.09.jpg"
          border="0"
        />
      </swiper-slide>
    </swiper-container>
    
  );
};

export default Slider;
