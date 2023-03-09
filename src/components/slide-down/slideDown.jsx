import React from "react";
import UseAnimations from 'react-useanimations';
import arrowDown from "react-useanimations/lib/arrowDown"
import classes from "./slideDown.module.scss"

const SlideDown = () => {
    return (
     
          <UseAnimations 
      animation={arrowDown}
      size={50}
      wrapperStyle= {
        {
            height: '10svh',
            width: '100dvw',
            opacity: '0.4'
        }
      }
      />
    
    )
};

export default SlideDown;