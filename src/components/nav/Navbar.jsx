import React from "react";
import PopupMenu from "../hamburger-menu/pop-up menu/popup";
import ContactUs from "../email-form/emailForm";

import classes from "./Navbar.module.scss";
import logo from "../../assets/common/logo.svg"

const Navbar = () => {
  return (
    <nav className={classes.navBar}>
      <div className={classes.logo}>
        <img
          src={logo}
          alt="logo estetica girardi"
        />
      </div>

      <div className={classes.name}>
        <p>Estética Girardi</p>
      </div>

      <div className={classes.ico}>
        <a href="https://www.instagram.com/estetica_girardi/" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://wa.me/56962105309" target="_blank">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <ContactUs />
      </div>
      <div className={classes.dropDown}>
        <PopupMenu />
      </div>
    </nav>
  );
};

export default Navbar;
