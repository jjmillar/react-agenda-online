import React from "react";

import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={classes.navBar}>
      <div className={classes.logo}>
      <img src="https://tinypic.host/images/2023/03/07/logo9e41e4e8bc630240.png" alt="logo9e41e4e8bc630240.png" border="0" />
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
