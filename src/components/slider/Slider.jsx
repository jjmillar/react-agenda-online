import React from 'react';

import { register } from "swiper/element/bundle";
register();
import "swiper/css/bundle";
import "./slider.scss";

import one from '../../assets/campaings/1.jpg';
import two from '../../assets/campaings/2.jpg';
import three from '../../assets/campaings/3.jpg';
import four from '../../assets/campaings/4.jpg';

const images = [one, two, three, four];

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
    {images.map( i => <swiper-slide class="swiper-slide"><img src={i} alt="estetica girardi promo"/></swiper-slide>)}
    </swiper-container>
  );
};

export default Slider;