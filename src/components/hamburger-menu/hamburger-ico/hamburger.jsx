import React from "react";
import "./hamburger.scss";

const Hamburger = ({ open, ...props }) => {
  return (
    <button className={ open ? "hamburger hamburger--collapse is-active" : "hamburger hamburger--collapse"} {...props}  type="button">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default Hamburger;
