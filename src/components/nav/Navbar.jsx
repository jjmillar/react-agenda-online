import React from "react";

import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={classes.navBar}>
      <div className={classes.logo}>
        <i className="fa-brands fa-drupal"></i>
      </div>

      <div className={classes.name}>
        <h1>Estetica Girardi</h1>
      </div>

      <div className={classes.ico}>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-whatsapp"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-regular fa-envelope"></i>
      </div>
    </nav>
  );
};

export default Navbar;
