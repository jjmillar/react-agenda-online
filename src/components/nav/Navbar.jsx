import React from "react";
import PopupMenu from "../hamburger-menu/pop-up menu/popup";

import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={classes.navBar}>
      <div className={classes.logo}>
      <img src="./assets/logo-39eb0691.svg" alt="logo estetica girardi"/>
      </div>

      <div className={classes.name}>
        <p>Estética Girardi</p>
      </div>

      <div className={classes.ico}>
        <a href="https://www.instagram.com/estetica_girardi/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://wa.me/56962105309" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
        <a href="mailto:julianjmillar@gmail.com"><i className="fa-regular fa-envelope"></i></a>
      </div>
      <div className={classes.menu}>
      <PopupMenu/>
      </div>
    </nav>
  );
};

export default Navbar;
