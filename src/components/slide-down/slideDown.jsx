import React from "react";
import UseAnimations from 'react-useanimations';
import arrowDown from "react-useanimations/lib/arrowDown"
import classes from "./slideDown.module.scss"

const SlideDown = () => {
    return (
     <div className={classes.slideArrow}>
        <UseAnimations 
      animation={arrowDown}
      size={50}
      wrapperStyle= {
        {
            height: '10svh',
            width: '100dvw',
            opacity: '0.4',
        }
      }
      />
     </div>
          
    
    )
};

export default SlideDown;