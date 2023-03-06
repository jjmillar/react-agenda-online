import React from "react";
import classes from "./Slider.module.scss";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Slider = () => (
  <AutoPlaySwipeableViews className={classes.wrapper}>
    <div className={classes.slide}>
      <img
        src="https://tinypic.host/images/2023/03/06/128460446e8974454.jpg"
        alt="128460446e8974454.jpg"
        border="0"
      />
    </div>
    <div className={classes.slide}>
      <img
        src="https://tinypic.host/images/2023/03/06/2.jpg"
        alt="2.jpg"
        border="0"
      />
    </div>
    <div className={classes.slide}>
      <img
        src="https://tinypic.host/images/2023/03/06/Imagen-de-WhatsApp-2023-03-03-a-las-19.55.09.jpg"
        alt="Imagen-de-WhatsApp-2023-03-03-a-las-19.55.09.jpg"
        border="0"
      />
    </div>
  </AutoPlaySwipeableViews>
);

export default Slider;
