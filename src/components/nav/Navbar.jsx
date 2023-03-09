import React from "react";

import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={classes.navBar}>
      <div className={classes.logo}>
      <img src="../../assets/logo/logo.svg" alt="logo estetica girardi"/>
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
      <ion-icon name="menu-outline"></ion-icon>
      </div>
    </nav>
  );
};

export default Navbar;
