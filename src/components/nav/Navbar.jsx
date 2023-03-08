import React from "react";

import classes from "./Navbar.module.scss";

const Navbar = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  let vw = window.innerWidth * 0.01;
  document.documentElement.style.setProperty('--vw', `${vw}px`);
  
  return (
    <nav className={classes.navBar}>
      <div className={classes.logo}>
      <img src="https://tinypic.host/images/2023/03/07/logo9e41e4e8bc630240.png" alt="logo9e41e4e8bc630240.png" border="0" />
      </div>

      <div className={classes.name}>
        <p>Estetica Girardi</p>
      </div>

      <div className={classes.ico}>
        <a href="https://www.instagram.com/estetica_girardi/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://wa.me/56962105309" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
        <a href="mailto:julianjmillar@gmail.com"><i className="fa-regular fa-envelope"></i></a>
      </div>
    </nav>
  );
};

export default Navbar;
