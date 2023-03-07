import React, { useRef, useEffect } from "react";

const Slider = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

/*  const swiperEl = document.querySelector("swiper-container");
  const swiperParams = {
    ref: { swiperElRef },
    slidesPerView: 1,
    class: mySwiper,
    navigation: true,
    pagination: true,
    keyboard: true,
    mousewheel: true,
    cssMode: true,

    on: {
      init() {
        // ...
      },
    },
  };

  // now we need to assign all parameters to Swiper element
  Object.assign(swiperEl, swiperParams);

  // and now initialize it
  swiperEl.initialize();
*/

  return (
    <swiper-container
      //init="false"
      ref={swiperElRef}
      class="mySwiper"
      navigation="true"
      pagination="true"
      keyboard="true"
      mousewheel="true"
      css-mode="true"
    >
      <swiper-slide>
        <img
          src="https://tinypic.host/images/2023/03/06/128460446e8974454.jpg"
          alt="128460446e8974454.jpg"
          border="0"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://tinypic.host/images/2023/03/06/2.jpg"
          alt="2.jpg"
          border="0"
        />
      </swiper-slide>
      <swiper-slide>
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
