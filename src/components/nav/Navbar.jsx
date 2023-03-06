import React from "react";

import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={classes.navBar}>
      <div className={classes.logo}>
        <i className="fa-brands fa-drupal"></i>
      </div>

      <div className={classes.name}>
        <p>Estetica Girardi</p>
      </div>

      <div className={classes.ico}>
        <a href="https://www.instagram.com/estetica_girardi/"><i className="fa-brands fa-instagram"></i></a>
        <a href="/"><i className="fa-brands fa-whatsapp"></i></a>
        <a href="/"><i className="fa-regular fa-envelope"></i></a>
      </div>
    </nav>
  );
};

export default Navbar;
