import React, { useRef, useState} from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, Pagination } from 'swiper/modules'

import IMAGES from "./images"
import "swiper/css"
import 'swiper/css/navigation'
import './slider.scss'

const Slider = () => {
  return (
    <Swiper
      navigation={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true
      }}
      loop={true}
      modules={[Navigation, Autoplay]}
      className='mySwiper swiper-container'
    >
      {IMAGES.map((i) => (
        <SwiperSlide className='swiper-slide' key={i.id}>
          <img src={i.image} alt="estetica girardi promo" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
